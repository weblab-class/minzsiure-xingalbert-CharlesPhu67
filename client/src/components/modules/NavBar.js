import React, { Component } from "react";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { HashLink as Link } from 'react-router-hash-link';

import { get, post } from "../../utilities";
import "./NavBar.css";
import "../pages/MainPage.css";

// This identifies your application to Google's authentication service
const GOOGLE_CLIENT_ID = "853392870845-01fp5j18t6rvnfcmg5mp4crvjuot6154.apps.googleusercontent.com";

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
      <>
      <head>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            
      </head>
      <nav className="NavBar-container">
        <div className="NavBar-title u-inlineBlock"> <Link to = "/main" style={{color: 'black', textDecoration: 'none'}} activeStyle={{color: 'white'}}> StudyRoom </Link> </div>
        
        <div className="NavBar-linkContainer u-inlineBlock">
          <Link to = '/main#about' className = 'NavBar-link'>what do?</Link>
          {/* <a class="NavBar-link" href="/main#about">what do?</a> */}

          <Link to="/plan" className="NavBar-link">
            do study?
          </Link>

          <Link to="/contact" className="NavBar-link">
            contact bear?
          </Link>
          
          {/* I commented out the following lines so that the Login button does not render in the NavBar*/}
          {/* {this.state.loggedIn ? (
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
          
          )} */}
        </div>
        
      </nav>
    </>
    );
  }
}

export default NavBar;
