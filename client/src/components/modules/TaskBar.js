import React, { Component } from "react";
import Task from "./Task.js";
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
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    componentDidMount() {
        //will need to implement api request
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
    

    render() {
		
        let taskList=this.state.tasks.map((task, index) => (
			<Task 
				id={task.id}
				index={index}
                className="TaskBar-task"
				name={task.name}
				type={task.type}
                duration={task.duration}
            />
        ))
        console.log(taskList);
        
        
        return (
            <>
                {/* <div>
                    taskbar stuffs here
                </div> */}
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
            </>
        )};
}

export default TaskBar;