import React, { Component } from "react";
import TaskBar from "../modules/TaskBar.js";
import StudyTimer from "../modules/StudyTimer.js";

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
                <TaskBar onPlanPage={false}/>
                <div>
                    <StudyTimer/>
                </div>
            </>
        )};
}

export default StudyRoom;