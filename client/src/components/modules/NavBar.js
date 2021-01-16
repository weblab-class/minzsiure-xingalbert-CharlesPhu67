import React, { Component } from "react";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import { get, post } from "../../utilities";
import "./NavBar.css";

// This identifies your application to Google's authentication service
const GOOGLE_CLIENT_ID = "121479668229-t5j82jrbi9oejh7c8avada226s75bopn.apps.googleusercontent.com";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
class NavBar extends Component {
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
      <nav className="NavBar-container">
        <div className="NavBar-title u-inlineBlock"> <Link to = "/" style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'white'}}> StudyRoom </Link> </div>
        <div className="NavBar-linkContainer u-inlineBlock">
          <Link to="/about" className="NavBar-link">
            what do?
          </Link>
          <Link to="/plan" className="NavBar-link">
            do study?
          </Link>

          <Link to="/contact" className="NavBar-link">
            contact bear?
          </Link>
          
          {this.state.loggedIn ? (
            <GoogleLogout
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Logout"
              onLogoutSuccess={this.handleLogout}
              onFailure={(err) => console.log(err)}
              className="NavBar-link NavBar-login"
            />
          ) : (
            <GoogleLogin
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Login"
              onSuccess={this.handleLogin}
              onFailure={(err) => console.log(err)}
              className="NavBar-link NavBar-login"
            />
          )}
        </div>
      </nav>
    );
  }
}

export default NavBar;
