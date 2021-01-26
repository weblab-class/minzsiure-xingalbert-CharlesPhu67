import React, { Component } from "react";

import "../../utilities.css";
import "./TagMusic.css";
import StudyButton from "../modules/StudyButton.js"

class TagMusic extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {

    }

    render() {
        return (
            <div className = "TagMusic">
                <h1 className="TagMusic-header u-textCenter">
                    Tag Yourself
                </h1>
                <h5 className = 'u-textCenter'> - Do you like to study with background music? -</h5>
                <br></br>

                <div className="TagMusic-container">
                    <div className = 'TagMusic-img1'></div>

                    <div className = 'TagMusic-img2'></div>
                    <div className = 'break'></div>
                    <input type="radio" name="radio"/>
                    <input type="radio" name="radio"/>
                    <div className = 'bottom-right'> <StudyButton/> </div>
                </div>

            </div>
        )
    }
}

export default TagMusic;