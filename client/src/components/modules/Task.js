import React, { Component } from "react";
import { Resizable } from "re-resizable";

import "../../utilities.css";
import "./Task.css";

class Task extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <>
                <Resizable className="Task-container"
                    defaultSize={{
                        width:320,
                        height:200,
                    }}
                >
                    Sample with default size
                </Resizable>
            </>
        )};
}

export default Task;