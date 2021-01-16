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
                <div>
                    Planning stuffs here.
                </div>
                <TaskBar/>
            </>
        )};
}

export default PlanPage;