import React, { Component } from "react";
import TaskBar from "../modules/TaskBar.js";
import StudyTimer from "../modules/StudyTimer.js";

import "../../utilities.css";
import "./StudyRoom.css";

class StudyRoom extends Component {
    constructor(props) {
        super(props);
        this.data = null;
        this.index = 0;
        this.state = {
            focusid: null,
            seconds: 0,
        }
    }
    
    //every second update focusid
    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1,
            focusid: this.data.tasks[this.index].id,
        }));
    }
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    // this.data stores the state of the TaskBar
    onChange = (incData) => {
        // console.log("incData " +incData)
        this.data = incData;
    }

    getTimeLeft = (minutes, seconds) => {
        if(! this.data) {
            return;
        }
        let index = 0;
        while (index < this.data.tasks.length && minutes >= this.data.tasks[index].duration) {
            minutes -= this.data.tasks[index].duration;
            index++;
        }
        if (index === this.data.tasks.length) {
            index --;
            this.index = index;
            return `Finished plan`
        }
        this.index = index;
        minutes = this.data.tasks[index].duration - minutes;
        // console.log("focusid " +this.state.focusid)
        let minutecount = ""
        if (minutes === 1) {
            minutecount = "1 minute";
        } else {
            minutecount = `${minutes} minutes`;
        }
        return `${minutecount} left on ${this.data.tasks[index].name}`;
    }

    

    render() {
        return (
            <>
                {this.props.userId && (
                    <TaskBar onPlanPage={false}
                        onChange={this.onChange}
                        userId={this.props.userId}
                        setfocusid={this.state.focusid}
                    />
                )}
                <div>
                    <StudyTimer getTimeLeft={this.getTimeLeft} data={this.data}/>
                
                </div>
                        <div className = 'TagLearner-container'>
                            <a className = 'StudyDucky' href = '/duck'></a>
                            <a className = 'Snake'></a>
                            
                        </div>

                        <div className = "StudyBear"></div>
                
            </>
        )};
}

export default StudyRoom;