import React, { Component } from "react";
import NextButton from "../modules/NextButton.js"
import "../../utilities.css";
import "./TagLearner.css";

class TagLearner extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {

    }

    render() {
        return (
            <div className = "TagLearner">
                <h1 className="TagLearner-header u-textCenter">
                    Tag Yourself
                </h1>
                <h5 className = 'u-textCenter'> - What type of learner are you? -</h5>
                <br></br>

                <div className="TagLearner-container">
                    <div className = 'TagLearner-img1'></div>
                    

                    <div className = 'TagLearner-img2'></div>
                    

                    <div className = 'break'></div>
                    <input type="radio" name="radio"/>
                    <input type="radio" name="radio"/>
                    <div className = 'bottom-right'> <NextButton/> </div>
                </div>
                
                
            </div>
        )
    }
}

export default TagLearner;