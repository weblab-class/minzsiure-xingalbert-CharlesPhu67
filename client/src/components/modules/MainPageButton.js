import React, { Component} from "react";

import "./MainPageButton.css";

// this button directs users to /plan

class MainPageButton extends Component {
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
                <button className="MainPageButton-button"
                    type="button"
                    value="Coder"
                    onClick={event =>  window.location.href='/plan'}
                >
                    Go
                </button>

                {/* Click me! */}
            </div>
        )
    }
}

export default MainPageButton