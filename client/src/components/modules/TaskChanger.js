import React, { Component } from "react";

import "../../utilities.css";
import "./TaskChanger.css"
import "./TaskBar.css"

class TaskChanger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            duration: "",
        };
    }

    componentDidMount() {

    }

    /*
        These next few lines are shamelessly stolen from CatBook
    */
    // called whenever the user types in the new post input box
    handleChange1 = (event) => {
        this.setState({
            name: event.target.value,
        });
    };

    // called when the user hits "Submit" for a new post
    handleSubmit1 = (event) => {
        event.preventDefault();
        console.log(this.state.name)
        this.props.newName && this.props.newName(this.state.name, this.props.focusid);
        this.setState({
            name: "",
        });
    };
    // called whenever the user types in the new post input box
    handleChange2 = (event) => {
        this.setState({
            duration: event.target.value,
        });
    };

    // called when the user hits "Submit" for a new post
    handleSubmit2 = (event) => {
        event.preventDefault();
        console.log(this.state.duration)
        this.props.newDuration && this.props.newDuration(parseInt(this.state.duration), this.props.focusid);
        this.setState({
            duration: "",
        });
    };

    incTime = (inc) => {
        console.log(this.state.duration);
        let prev_duration = this.state.duration === "" ? this.props.defaultDuration : this.state.duration;
        this.props.newDuration && this.props.newDuration(parseInt(prev_duration)+inc, this.props.focusid);
        this.setState({
            // duration: (parseInt(prev_duration)+inc).toString(),
            duration: "",
        });
    }

    handleDelete = (event) => {
        event.preventDefault();
        this.props.newName && this.props.delTask(this.props.focusid);
    }

    render() {
        
        return (
            <>
            <div>
                {this.props.defaultName}
                <span>
                    <button className="TaskChanger-delButton TaskBar-button"
                        type="button"
                        value="Delete"
                        onClick={this.handleDelete}
                    >
                        Delete
                    </button>
                </span>
            </div>
            <div className="u-flex TaskChanger-container">
                <input
                    type="text"
                    placeholder={this.props.defaultName}
                    value={this.state.name}
                    onChange={this.handleChange1}
                    className="TaskChanger-input"
                />
                <button
                    type="submit"
                    className="TaskChanger-button u-pointer"
                    value="Submit"
                    onClick={this.handleSubmit1}
                >
                    Submit
                </button>
             </div>


             <div className="u-flex TaskChanger-container">
                <input
                    type="text"
                    placeholder={this.props.defaultDuration}
                    value={this.state.duration}
                    onChange={this.handleChange2}
                    className="TaskChanger-input"
                />
                <button
                    type="submit"
                    className="TaskChanger-button u-pointer"
                    value="Submit"
                    onClick={this.handleSubmit2}
                >
                    Submit
                </button>
             </div>

            <div className="u-flex TaskChanger-bottomRow">
                <div>
                    <button className="TaskChanger-timeButton TaskBar-button"
                        type="button"
                        value="-1 min"
                        onClick={(event) => this.incTime(-1)
                        }
                    >
                        -1 min 
                    </button>
                    <button className="TaskChanger-timeButton TaskBar-button"
                        type="button"
                        value="+1 min"
                        onClick={(event) => 
                            this.incTime(1)
                        }
                    >
                        +1 min
                    </button>
                </div>
                
                <button className="TaskChanger-hideButton TaskBar-button"
                    type="button"
                    value="hide"
                    onClick={(event) => 
                        this.props.onBlur()
                    }
                >
                    hide
                </button>
            </div>
             </>
        )
    };
}

export default TaskChanger;