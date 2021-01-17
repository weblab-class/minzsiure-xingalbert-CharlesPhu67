import React, { Component } from "react";
import HomeButton from "../modules/HomeButton.js"
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

import "../../utilities.css";
import "./DuckFinish.css";

class DuckFinish extends Component {
    constructor(props) {
        super(props);
        
    }
    
    componentDidMount() {

    }

    render() {

        return (
            
            <div className = "DuckFinish">
                <Confetti/>
                
                <h1 className="DuckFinish-header u-textCenter">
                    <span>Congratulations!</span>
                    <span>You did duckycellent!</span>
                </h1>

                <div className="DuckFinish-Button">
                    <HomeButton/>
                </div>

                <div className = "DuckFinish-Duck"/>
            </div>
        )
    }
}

export default DuckFinish;