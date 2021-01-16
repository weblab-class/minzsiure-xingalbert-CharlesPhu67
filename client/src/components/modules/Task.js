import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";

import "../../utilities.css";
import "./Task.css";

const grid = 8;
const getItemStyle = (isDragging, draggableStyle, defaultBackgroundColor, width) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 1px 0 0`,
  
    // change background colour if dragging

    background: isDragging ? "lightgreen" : defaultBackgroundColor,
    flexGrow: width,
  
    // styles we need to apply on draggables
    ...draggableStyle
  });

class Task extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        let isBreak = this.props.type === "break";
        let defaultBackgroundColor = isBreak ? "#FFF4E9" : "#41CBC3";
        return (
            <Draggable key={this.props.id} draggableId={this.props.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style,
                            defaultBackgroundColor,
                            this.props.duration
                        )}
                        className="Task-style u-textCenter"
                    >
                        {this.props.name}
                    </div>
                )}
            </Draggable>
        )};
}

export default Task;