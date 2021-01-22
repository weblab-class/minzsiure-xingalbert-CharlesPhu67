import React, { Component } from "react";
import TaskBar from "../modules/TaskBar.js";

import "../../utilities.css";
import "./PlanPage.css";

class PlanPage extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {

    }

    render() {
        return (
            <>  
                <h1 className="PlanPage-header u-textCenter">
                    Plan
                </h1>
                <TaskBar onPlanPage={true}/>
            </>
        )};
}

export default PlanPage;