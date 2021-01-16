import React, { Component } from "react";
import NavBar from "./modules/NavBar.js";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import MainPage from "./pages/MainPage.js"
import DuckPage from "./pages/DuckPage.js"
import WhatDo from "./pages/WhatDo.js"
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
          <NavBar />
          <Router>
            <MainPage path ="/"/>
            <WhatDo path="/about"/>
            <Contact path = "/contact" />
            <NotFound default/>
            <DuckPage path = '/duck'/>
            {/*<MainPage/>
            <WhatDo/>
            <DoStudy/>
            <StudyRoom/>
            <Contact/>
            <DuckPage/>*/}
          </Router>
        </div> 
      
    );
  }
}

export default App;
