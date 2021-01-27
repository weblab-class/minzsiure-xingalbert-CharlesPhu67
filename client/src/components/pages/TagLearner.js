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
    
    check1 =  (event) => {
            document.getElementById("1").checked = true;
          }

    check2 =  (event) => {
            document.getElementById("2").checked = true;
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
                    <button className = 'TagLearner-img1' onClick= {this.check1}></button>
                    

                    <button className = 'TagLearner-img2' onClick= {this.check2}></button>
                    

                    <div className = 'break'></div>

                    <input type="radio" name="radio" id ='1'/>
                    <input type="radio" name="radio" id ='2'/>
                    
                    <div className = 'bottom-right'> <NextButton/> </div>
                </div>
                
                
            </div>
        )
    }
}

export default TagLearner;