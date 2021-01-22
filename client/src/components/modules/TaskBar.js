import React, { Component } from "react";
import Task from "./Task.js";
import TaskChanger from "./TaskChanger.js";
import { Resizable } from "re-resizable";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import "../../utilities.css";
import "./TaskBar.css";

const getDefaultTasks = () => ([
	{
		id: "task-1",
		name: "Task 1",
		type: "task",
		duration: 15,
	},
	{ id: "break-1", name: "Break", type: "break", duration: 5, },
	{ id: "task-2", name: "Task 2", type: "task", duration: 15, },
	{ id: "break-2", name: "Break", type: "break", duration: 5, },
	{ id: "task-3", name: "Task 3", type: "task", duration: 15, }
]);

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  display: "flex",
  padding: grid,
  overflow: "auto"
});

class TaskBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tasks: getDefaultTasks(),
          focus: this.props.onPlanPage, //set to false
          focusid: this.props.onPlanPage? "task-1" : null, //set to null
          numTask: 3,
          numBreak: 2,
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    componentDidMount() {
        //will need to implement api request
        this.returnState();
    }

    componentDidUpdate() {
        this.returnState();
    }

    returnState = () => {
        // returns state to PlanPage
        if(this.props.onChange) {
            this.props.onChange(this.state)
        }
    }

    onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
          	return;
        }
    
        const tasks = reorder(
			this.state.tasks,
			result.source.index,
			result.destination.index
        );

        this.setState({
          	tasks
        });
      }
    
    handleFocus = (id) => {
        console.log("new focus: ".concat(this.state.focusid));
        this.setState({
            focus: true,
            focusid: id,
        })
        // console.log("new focus: ".concat(this.state.focusid));
    }
    handleBlur = () => {
        console.log("Blur");
        this.setState({
            focus: false,
            focusid: null,
        })
    }
    newDuration = (newDuration, id) => {
        let TaskObj=this.findTask(id);
        TaskObj.duration = newDuration;
        this.setState((prevstate) => ({
            tasks: prevstate.tasks,
        }))
    }
    newName = (newName, id) => {
        let TaskObj=this.findTask(id);
        TaskObj.name=newName;
        this.setState((prevstate) => ({
            tasks: prevstate.tasks,
        }))
    }
    delTask = (id) => {
        let TaskObj=this.findTask(id);
        let index = this.state.tasks.indexOf(TaskObj);
        console.log(index)
        let nextIndex = index>0?index-1 : 0;
        console.log(nextIndex);
        this.state.tasks.splice(index, 1);
        this.setState((prevstate) => ({
            tasks: prevstate.tasks,
            focus: true,
            focusid: prevstate.tasks[nextIndex].id,
        }));
    }
    findTask = (id) => {
        for(let i = 0; i<this.state.tasks.length; i++) {
            if (this.state.tasks[i].id === id) {
                return this.state.tasks[i];
            }
        }
         return null;
    }
    addTask = () => {
        let newTask = {
            id: `task-${this.state.numTask+1}`, 
            name: `Task ${this.state.numTask+1}`, 
            type: "task", 
            duration: 15, 
        };
        this.setState((prevstate) => ({
            tasks: prevstate.tasks.concat(newTask),
            numTask: prevstate.numTask+1,
        }))
    }
    addBreak = () => {
        this.state.numBreak++;
        let newBreak = { 
            id: `break-${this.state.numBreak+1}`, 
            name: `Break`, 
            type: "break", 
            duration: 5, };
        this.setState((prevstate) => ({
            tasks: prevstate.tasks.concat(newBreak),
            numBreak: prevstate.numBreak+1,
        }))
    }
    

    render() {
		
        let taskList=this.state.tasks.map((task, index) => (
			<Task 
				id={task.id}
				index={index}
                className="TaskBar-task"
				name={task.name}
				type={task.type}
                duration={task.duration}
                handleFocus={this.handleFocus}
                focusid={this.state.focusid}
            />
        ))
        console.log(taskList);
        
        let totalDuration = 0;
        for(let i =0; i<this.state.tasks.length; i++) {
            totalDuration+=this.state.tasks[i].duration;
        }
        
        let TaskChangerObj = <></>;
        let TaskObj=this.findTask(this.state.focusid);
        console.log(this.state.focusid);
        console.log(TaskObj)
        if (this.state.focus) {
            TaskChangerObj = <TaskChanger 
                newDuration={this.newDuration}
                newName={this.newName}
                delTask={this.delTask}
                focusid={this.state.focusid}
                defaultName={TaskObj.name}
                defaultDuration={TaskObj.duration}
                onBlur={this.handleBlur}
                onPlanPage={this.onPlanPage}
            />
        } else {
            TaskChangerObj = <div></div>
        }
        
        return (
            <>
                <div className="TaskBar-container">
                    <div className="u-flex" >
                        <button className="TaskBar-addTask TaskBar-button"
                            type="button"
                            value="add Task"
                            onClick={(event) => 
                                this.addTask()
                            }
                        >
                            Add Task 
                        </button>
                        <button className="TaskBar-addBreak TaskBar-button"
                            type="button"
                            value="add Task"
                            onClick={(event) => 
                                this.addBreak()
                            }
                        >
                            Add Break 
                        </button>
                    </div>
                    <div className="TaskBar-time u-flex">
                        <div>0 min</div>
                        <div className="TaskBar-end">{totalDuration} min</div>
                    </div>
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        <Droppable droppableId="TaskBar" direction="horizontal">
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    style={getListStyle(snapshot.isDraggingOver)}
                                    className="TaskBar-style"
                                    {...provided.droppableProps}
                                >
                                    {taskList}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                    <div>
                        {TaskChangerObj}
                    </div>
                </div>

            </>
        )};
}

export default TaskBar;