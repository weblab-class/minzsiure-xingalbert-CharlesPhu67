import React, { Component } from "react";
import Task from "./Task.js";
import { Resizable } from "re-resizable";
import { DragDropContext } from 'react-beautiful-dnd';

import "../../utilities.css";
import "./TaskBar.css";

let TestTask = {
    type: "Task",
    name: "TestTask",
    duration: 1,
}
let TestBreak = {
    type: "Break",
    name: "TestBreak",
    duration: 1,
}
const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'solid 1px #ddd',
    background: '#f0f0f0',
  };


class TaskBar extends Component {
    constructor(props) {
        super(props);
        this.state= {
            duration: 60,
            tasks: [TestTask, TestBreak],
        }
    }

    componentDidMount() {
        //will need to implement api request
    }

    render() {
        let tasksList=this.state.tasks.map((task) => (
            <Task 
                className="TaskBar-task"
                type={task.type}
                name={task}
                duration={task.duration}
            />
        ))
        console.log(tasksList);
        return (
            <>
                <div>
                    taskbar stuffs here
                </div>
                <div className="u-flexRow">
                {/* <div> */}
                    asdf
                    
                </div>
                <div
                    className="TaskBar-style"
                    >
                    <Resizable
                        style={style}
                        defaultSize={{
                        width: '50%',
                        height: 200,
                        }}
                        maxWidth="100%"
                        minWidth="1"
                    >
                        001
                    </Resizable>
                    
                    <Resizable
                        style={style}
                        defaultSize={{
                        width: '50%',
                        height: 200,
                        }}
                        maxWidth="100%"
                        minWidth="1"
                    >
                        001
                    </Resizable>
                    {/* <div style={{ ...style, width: '100%', minWidth: '1px' }}>
                        002
                    </div> */}
                </div>
            </>
        )};
}

export default TaskBar;