import React, { Component } from "react";
import MainPageButton from "../modules/MainPageButton.js";
import Timer from '../modules/Timer.js';

import "../../utilities.css";
import "./DuckTimer.css";


class DuckPage extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {

    }

    render() {
        return (
            <div className = "DuckTimer">

                <div className="DuckTimer-Button">
                    <Timer/>
                </div>

            </div>
        )
    }
}

export default DuckPage;