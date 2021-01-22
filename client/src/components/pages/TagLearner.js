import React, { Component } from "react";

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
                </div>

            </div>
        )
    }
}

export default TagLearner;