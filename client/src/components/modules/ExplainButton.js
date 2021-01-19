import React, { Component} from "react";

import "./ExplainButton.css";

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
                <button className="ExplainButton-button"
                    type="button"
                    value="Coder"
                    onClick={event =>  window.location.href='/duck'}
                >
                    Surprise 
                </button>

                {/* Click me! */}
            </div>
        )
    }
}

export default ExplainButton