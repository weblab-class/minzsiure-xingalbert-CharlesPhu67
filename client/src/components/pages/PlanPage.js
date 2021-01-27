import React, { Component } from "react";
import TaskBar from "../modules/TaskBar.js";
import PlanSelector from "../modules/PlanSelector.js";
import { post } from "../../utilities.js";
import { Link } from "@reach/router";
import { get } from "../../utilities.js";
import "./TagLearner.css";

import "../../utilities.css";
import "./PlanPage.css";
function moving () { 
    var elemt = document.getElementById("Ducky-img"); 
    var pos = 0 
    var id = setInterval(frame, 10)
    function frame () { 
        if (pos == 350) { 
            clearInterval(id); 
        }
        else { 
            pos++;
            elem.style.top = pos + "px" ; 
            element.style.left = pos + 'px';
        }
    }
}
class PlanPage extends Component {
    constructor(props) {
        super(props);
        this.data = null;
        this.state = {
            savePrompt: false,
            name: undefined,
            options: [],
            plans: null,
            tasks: undefined,
        }
    }
    
    componentDidMount() {
        
    }



    getUserPlans = () => {
        get('/api/plan', {userId :this.props.userId}).then((plans) => {
            console.log(this.props.userId);
            console.log("Queried Plans: " + plans.toString());
            console.log(plans[0]);
            //remove element with name CURRENT_PLAN
            let curr_plan = 0;
            let found_curr_plan = false;
            for (let i = 0; i<plans.length; i++) {
                if (plans[i].name === "CURRENT_PLAN") {
                    curr_plan = i;
                    found_curr_plan=true;
                    break;
                }
            }
            if(found_curr_plan) {
                plans.splice(curr_plan, 1);
            }
            let planNames = plans.map((plan) => ({
                value: plan.name, 
                label: plan.name,
            }));
            console.log(planNames);
            this.setState({options: planNames, plans: plans});
        });
    }

    // this.data stores the state of the TaskBar
    onChange = (incData) => {
        this.data = incData;
        
    }

    handleLoadPlan = (loadPlan) => {
        let body = loadPlan;
        body.name = "CURRENT_PLAN";
        post("/api/plan", body).then((res) => (this.setState({
            name: body.planName,
            loadedPlan: body,
        })));
    }

    toggleSavePrompt = () => {
        this.setState({
            savePrompt: !this.state.savePrompt,
        })
    }

    savePlan = (name) => {
        console.log("name: "+name)
        //if user saved without naming plan
        let planName = (name)? this.state.name : "My Plan";
        if(name === "CURRENT_PLAN" && !(planName)) {
            //if user pressed "Start" and name is undefined
            planName = "My Plan";
        }
        const body = loadedPlan ? loadedPlan : {
            tasks: this.data.tasks,
            numTask: this.data.numTask,
            numBreak: this.data.numBreak,
            name: name,
            userId: this.props.userId,
            planName: planName,
        };
        post("/api/plan", body);
        console.log("User saved: "+ this.props.userId);
        console.log(body);
        this.state.plans.push(body);
        this.state.options.push({
            value: body.name,
            label: body.name,
        });
        this.setState({
            savePrompt: false,
            plans: this.state.plans,
            options: this.state.options,
            name: name,
        })
    }

    //the following two functions are for the input box
    handleChange = (event) => {
        this.setState({
            name: event.target.value,
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.savePlan(this.state.name);
        this.setState({
            savePrompt: !this.state.savePrompt,
        });
    };
    render() {
        return (
            <>  
                <h1 className="PlanPage-header u-textCenter">
                    Plan!
                </h1>
                {this.props.userId && (
                    <div className="PlanPage-planSelector">
                        <PlanSelector handleLoadPlan={this.handleLoadPlan}
                            userId={this.props.userId}
                            options={this.state.options}
                            plans={this.state.plans}
                            getUserPlans={this.getUserPlans}
                        />
                    </div>
                )}

                <TaskBar onPlanPage={true} 
                    onChange={this.onChange} 
                    userId={this.props.userId}
                    planName={this.state.name}
                    loadedPlan={this.state.loadedPlan}
                />
                {this.props.userId ? (
                <div className="PlanPage-buttonRow">
                    <button className="PlanPage-button PlanPage-save"
                        type="button"
                        value="Save"
                        onClick={(event) => {
                            this.toggleSavePrompt();
                        }}
                    >
                        {this.state.savePrompt? ("Cancel") : ("Save")}
                    </button>
                    <Link to="/study">
                        <button className="PlanPage-button PlanPage-start"
                            type="button"
                            value="Start"
                            onClick={(event) => {
                                this.savePlan("CURRENT_PLAN");
                            }}
                        >
                            Start
                        </button>
                    </Link>
                    <a className="PlanPage-button PlanPage-share"
                        href = "https://www.facebook.com/StudyBear-102063325238661"
                        target="_blank"

                        
                    >
                        Share
                    </a>
                </div>
                )
                : <div className ="PlanPage-notLoggedIn">
                    Not logged in!
                </div>
                }

                {this.state.savePrompt && (
                    <div className="PlanPage-savePrompt u-flex">
                        <input
                            type="text"
                            placeholder={"My Plan"}
                            value={this.state.name}
                            onChange={this.handleChange}
                            className="PlanPage-input"
                        />
                        <button
                            type="submit"
                            className="PlanPage-inputButton u-pointer"
                            value="Save"
                            onClick={this.handleSubmit}
                        >
                            Save
                        </button>
                    </div>
                )}
            </>
        )
    };
}

export default PlanPage;