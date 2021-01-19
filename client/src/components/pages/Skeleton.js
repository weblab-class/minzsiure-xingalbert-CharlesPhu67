import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./Skeleton.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "853392870845-01fp5j18t6rvnfcmg5mp4crvjuot6154.apps.googleusercontent.com";

class Skeleton extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
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
      <>
        {this.props.userId ? (
          <GoogleLogout
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={this.props.handleLogout}
            onFailure={(err) => console.log(err)}
          />
        ) : (

          <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={this.props.handleLogin}
            onFailure={(err) => console.log(err)}
          />
          
        )}
      </>
    );
  }
}

export default Skeleton;
