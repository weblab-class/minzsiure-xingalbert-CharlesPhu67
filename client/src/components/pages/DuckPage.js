import React, { Component } from "react";
import TimerButton from "../modules/TimerButton.js"

import "../../utilities.css";
import "./DuckPage.css";

class DuckPage extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {

    }

    render() {
        return (
            <div className = "DuckPage">
                <h1 className="DuckPage-header u-textCenter">
                    <span>EXPLAIN</span>
                    <span>with ME</span>
                </h1>

                <div className="DuckPage-Button">
                    <TimerButton/>
                </div>

                <div className = "DuckPage-Duck"/>
            </div>
        )
    }
}

export default DuckPage;