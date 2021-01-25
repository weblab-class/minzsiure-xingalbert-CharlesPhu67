import React, { Component } from "react";
import TaskBar from "../modules/TaskBar.js";
import PlanSelector from "../modules/PlanSelector.js";
import { post } from "../../utilities.js";
import { Link } from "@reach/router";


import "../../utilities.css";
import "./PlanPage.css";

class PlanPage extends Component {
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

    savePlan = (name) => {
        const body = {
            tasks: this.data.tasks,
            numTask: this.data.numTask,
            numBreak: this.data.numBreak,
            name: name,
            userId: this.props.userId,
        };
        post("/api/plan", body);
    }

    render() {
        return (
            <>  
                <h1 className="PlanPage-header u-textCenter">
                    Plan!
                </h1>
                <PlanSelector />

                <TaskBar onPlanPage={true} onChange={this.onChange} userId={this.props.userId}/>

                <div className="PlanPage-buttonRow">
                    <button className="PlanPage-button PlanPage-save"
                        type="button"
                        value="Save"
                        onClick={(event) => {
                            this.savePlan("temp-name");
                        }}
                    >
                        Save
                    </button>
                    <Link to="/study">
                        <button className="PlanPage-button PlanPage-start"
                            type="button"
                            value="Start"
                            onClick={(event) => {
                                this.savePlan("CURRENT_PLAN");
                            }}
                        >
                            Start
                        </button>
                    </Link>
                    <button className="PlanPage-button PlanPage-share"
                        type="button"
                        value="Share"
                        onClick={(event) => 
                            doSomething()
                        }
                    >
                        Share
                    </button>
                </div>
            </>
        )};
}

export default PlanPage;