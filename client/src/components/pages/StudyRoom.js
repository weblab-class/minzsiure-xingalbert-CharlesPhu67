import React, { Component } from "react";
import TaskBar from "../modules/TaskBar.js";

import "../../utilities.css";
import "./StudyRoom.css";

class StudyRoom extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {

    }

    render() {
        return (
            <>
                <TaskBar/>
                <div>
                    other study stuffs here
                </div>
            </>
        )};
}

export default StudyRoom;