import React, { Component} from "react";
import { Link } from "@reach/router";
import "./StudyButton.css";

// this button directs users to /plan

class StudyButton extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {

    }

    // linkToLogin = (event) => {

    //     console.log(`needs to be implemented`)
    // }

    render() {
        return (
            <div className="u-flex" >
                <Link to = '/plan'>
                    <button className="NextButton-button"
                        type="button"
                        value="Coder"
                        // onClick={event =>  window.location.href='/plan'}
                    >
                        Plan→
                    </button>
                </Link>
                {/* Click me! */}
            </div>
        )
    }
}

export default StudyButton