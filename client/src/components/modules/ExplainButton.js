import React, { Component} from "react";

import "./ExplainButton.css";
import { Link } from "@reach/router";

class ExplainButton extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {

    }

    linkToDuck = (event) => {

        console.log(`needs to be implemented`)
    }

    render() {
        return (
            <div className="u-flex" >
                <Link to ='/duck'>
                <button className="ExplainButton-button"
                    type="button"
                    value="Coder"
                    // onClick={event =>  window.location.href='/duck'}
                >
                    Surprise 
                </button>
                </Link>

                {/* Click me! */}
            </div>
        )
    }
}

export default ExplainButton