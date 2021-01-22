import React, { Component} from "react";
import { Link } from "@reach/router";
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
                <Link to = '/plan'>
                    <button className="MainPageButton-button"
                        type="button"
                        value="Coder"
                        // onClick={event =>  window.location.href='/plan'}
                    >
                        Go
                    </button>
                </Link>
                {/* Click me! */}
            </div>
        )
    }
}

export default MainPageButton