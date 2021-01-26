import React, { Component } from "react";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import "../../utilities.css";
import { Mongoose, Schema } from "mongoose";
import Dropdown from 'react-dropdown';
import Select from 'react-select';
import 'react-dropdown/style.css';

import "./PlanSelector.css";
//import models so we can interact with database 


class PlanSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
        };
        this.prevprops = props;
    }

    componentDidMount() {
        this.props.getUserPlans();
    }

    componentDidUpdate() {
        // if(this.prevprops !== this.props) {
        //     this.state.plans.push(this.props.newSavedPlan);
        //     this.state.options.push({
        //         value: this.props.newSavedPlan.name,
        //         label: this.props.newSavedPlan.name,
        //     });
        //     console.log(this.props.newSavedPlan.name +" " + this.prevprops.newSavedPlan);
        //     this.setState((prevstate) => prevstate);
        //     this.prevprops = this.props;
        // }
    }
    
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
        let newPlan = null;
        for (let i = 0; i<this.props.plans.length; i++) {
            if(this.props.plans[i].name === selectedOption) {
                newPlan = this.props.plans[i];
                break;
            }
        }
        this.props.handleLoadPlan(newPlan);
    };

    render() {
        const { selectedOption } = this.state;
        return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={this.props.options}
                isSearchable = {true}
                placeholder="Load Saved Plan"
            />
        );
      }
}

export default PlanSelector;
