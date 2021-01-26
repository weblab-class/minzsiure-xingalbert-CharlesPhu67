import React, { Component } from "react";
import TaskBar from "../modules/TaskBar.js";
import StudyTimer from "../modules/StudyTimer.js";

import "../../utilities.css";
import "./StudyRoom.css";

class StudyRoom extends Component {
    constructor(props) {
        super(props);
        this.data = null;
    }
    
    componentDidMount() {

    }

    // this.data stores the state of the TaskBar
    onChange = (incData) => {
        this.data = incData;
    }

    render() {
        return (
            <>
                <TaskBar onPlanPage={false} onChange={this.onChange} userId={this.props.userId}/>
                <div className = "MainPage" >
                    <StudyTimer/>
                </div>
            </>
        )};
}

export default StudyRoom;