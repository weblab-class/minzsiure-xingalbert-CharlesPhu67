import React, { Component} from "react";

import "./TimerButton.css";

// this button directs users to /plan

class TimerButton extends Component {
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
                <button className="TimerButton-button"
                    type="button"
                    value="Coder"
                    onClick={event =>  window.location.href='/timer'}
                >
                    Timer
                </button>

                {/* Click me! */}
            </div>
        )
    }
}

export default TimerButton