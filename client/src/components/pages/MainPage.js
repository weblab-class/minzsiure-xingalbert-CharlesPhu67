import React, { Component } from "react";
import MainPageButton from "../modules/MainPageButton.js"

import "../../utilities.css";
import "./MainPage.css";

class MainPage extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {

    }

    render() {
        return (
            <div className = "MainPage">
                
                <h1 className="MainPage-header u-textCenter">
                    <span>STUDY with</span>
                    <span>ME</span>
                </h1>

                <div className="MainPage-Button">
                    <MainPageButton/>
                </div>

                <div className = "MainPage-Bear"/>

            </div>
        )
    }
}

export default MainPage;