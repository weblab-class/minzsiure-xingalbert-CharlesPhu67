import React, { Component } from "react";
// import MainPageButton from "../modules/MainPageButton.js"
// import ExplainButton from "../modules/ExplainButton.js"
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import 'bootstrap/dist/css/bootstrap.min.css';

import "../../utilities.css";
import "./Opening.css";


import 'bootstrap/dist/css/bootstrap.min.css';

const GOOGLE_CLIENT_ID = "121479668229-t5j82jrbi9oejh7c8avada226s75bopn.apps.googleusercontent.com";


class Opening extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
          };
    }
    
    handleLogin = (res) => {
        // 'res' contains the response from Google's authentication servers
        console.log(res);
        this.setState({ loggedIn: true });
    
        // TODO: Send res.tokenObj.id_token to the backend
        const token = res.tokenObj.id_token;
        post ('/api/login', { token }).then (
          () => {
            this.setState({ loggedIn: true})
          }) 
      };
    
      handleLogout = () => {
        console.log("Logged out successfully!");
        this.setState({ loggedIn: false });
    
        // TODO: Tell the backend we logged out
        post("/api/logout").then(
          () => {
            this.setState( {loggedIn: false})
          })
      };
    
    render() {
        return (
            <div id='Opening'>
                   {this.state.loggedIn ? (
            <GoogleLogout
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Logout"
              onLogoutSuccess={this.handleLogout}
              onFailure={(err) => console.log(err)}
              className="Opening-Button"
            />
          ) : (
            <GoogleLogin
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Login"
              onSuccess={this.handleLogin}
              onFailure={(err) => console.log(err)}
              className="Opening-Button"
            />
          
          )}

            </div>
        )
    }
}

export default Opening;