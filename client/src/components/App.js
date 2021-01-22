import React, { Component } from "react";
import NavBar from "./modules/NavBar.js";
import { Router, Location } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import MainPage from "./pages/MainPage.js"
import Opening from "./pages/Opening.js"
import DuckPage from "./pages/DuckPage.js"
import DuckTimer from "./pages/DuckTimer.js"
import DuckFinish from "./pages/DuckFinish.js"
import WhatDo from "./pages/WhatDo.js"
import StudyFinish from "./pages/StudyFinish.js"


import StudyRoom from "./pages/StudyRoom.js"
import PlanPage from "./pages/PlanPage.js"
import Contact from "./pages/Contact.js"
import "../utilities.css";




import { socket } from "../client-socket.js";

import { get, post } from "../utilities";




/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
      userId: undefined,
    };
  }

  componentDidMount() {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        this.setState({ userId: user._id });
      }
    });
  }

  handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      this.setState({ userId: user._id });
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  handleLogout = () => {
    this.setState({ userId: undefined });
    post("/api/logout");
  };

  render() {
    
      

    
      return (
        
        <div className="App-container">
          
            
          <Location>
            {locationProps => (
              locationProps.location.pathname === '/' ? null: (
              <NavBar
                handleLogin={this.handleLogin}
                handleLogout={this.handleLogout}
                userId={this.state.userId}
              />)
            )}
          </Location>
             

          <Router>

            <Opening path = '/' userId={this.state.userId}/>

            <MainPage path ="/main" userId={this.state.userId}/>
                  
            <PlanPage path="/plan" userId={this.state.userId}/>
            <StudyRoom path ="/study" userId={this.state.userId}/>
            <StudyFinish path ="/finish" userId={this.state.userId}/>
            <Contact path = "/contact" userId={this.state.userId}/>
            <NotFound default/>
            <DuckPage path = '/duck' userId={this.state.userId}/>
            <DuckTimer path = '/timer'/>
            <DuckFinish path = '/duckfinish'/>
            {/*<MainPage/>
            <WhatDo/>
            <DoStudy/>
            <Contact/>
            <DuckPage/>*/}
          </Router>
        </div> 
      
    );
          
    
    
  }
}

export default App;
