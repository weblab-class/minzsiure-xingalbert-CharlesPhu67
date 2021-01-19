import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import 'bootstrap/dist/css/bootstrap.min.css';

import "../../utilities.css";
import "./Opening.css";
import { navigate } from "@reach/router";
import { post } from "../../utilities.js";



import 'bootstrap/dist/css/bootstrap.min.css';

const GOOGLE_CLIENT_ID = "853392870845-01fp5j18t6rvnfcmg5mp4crvjuot6154.apps.googleusercontent.com";



  

class Opening extends Component {
    constructor(props) {
        super(props);
        console.log("here")
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
            this.setState({ loggedIn: true}, () => { 
              navigate ('/main') 
            })
            
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

    handleLoginTest = (res) => {
      console.log("here");
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
              onSuccess={ this.handleLoginTest } //this.handleLogin
              onFailure={(err) => console.log(err)}
              className="Opening-Button"
            />
          
          )}

            </div>
        )
    }
}

export default Opening;
