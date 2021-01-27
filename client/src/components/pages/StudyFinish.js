import React, { Component } from "react";
import HomeButton from "../modules/HomeButton.js"
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

import "../../utilities.css";
import "./StudyFinish.css";

class StudyFinish extends Component {
    constructor(props) {
        super(props);
        
    }
    
    componentDidMount() {

    }

    render() {

        return (
            
            <div className = "StudyFinish">
                <Confetti/>
                
                <h1 className="StudyFinish-header u-textCenter">
                    <span>Congratulations!</span>
                    <span>You did Excellent!</span>
                    <span>
                        <a className="StudyFinish-share"
                        href = "https://www.facebook.com/StudyBear-102063325238661"
                        target="_blank">Share? (tag yourself!) </a>
                    </span>
                </h1>

                <div className="StudyFinish-Button">
                    <HomeButton/>
                </div>

                <div className = "StudyFinish-Bear"/>
            </div>
        )
    }
}

export default StudyFinish;