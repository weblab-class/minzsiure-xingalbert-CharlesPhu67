import React, { Component} from "react";
import { Link } from "@reach/router";
import "./NextButton.css";

// this button directs users to /plan

class NextButton extends Component {
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
                <Link to = '/tagmusic'>
                    <button className="NextButton-button"
                        type="button"
                        value="Coder"
                        // onClick={event =>  window.location.href='/plan'}
                    >
                        Next→
                    </button>
                </Link>
                {/* Click me! */}
            </div>
        )
    }
}

export default NextButton