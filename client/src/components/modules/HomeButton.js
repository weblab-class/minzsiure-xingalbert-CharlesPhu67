import React, { Component} from "react";

import "./HomeButton.css";

// this button directs users to /plan

class HomeButton extends Component {
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
                <button className="HomeButton-button"
                    type="button"
                    value="Coder"
                    onClick={event =>  window.location.href='/main'}
                >
                    Home
                </button>
            </div>
        )
    }
}

export default HomeButton