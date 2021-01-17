import React from 'react';
import "./MainPage.css";
import "./WhatDo.css";

class Contact extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    }
  }
    resetForm(){
      this.setState({name: "", email: "", message: ""})
    }

    render() {
      return(
          <div className = "MainPage">
            <div className = "MainPage-Bear"/>
            <h1 className="WhatDo-header u-textCenter">
              Contact Us
            </h1>
            <form id="contact-form" onSubmit={this.handleSubmit} method="POST">

              <div className="Contact-header u-textCenter">
                  <input  className="form-control" id="name" placeholder = "Name" value={this.state.name} onChange={this.onNameChange} />
              </div>

              <div className="Contact-header u-textCenter">
                  <input type="email" className="form-control" placeholder = "Your Email" id="email" value={this.state.email} onChange={this.onEmailChange}/>
              </div>
              
              <div className="Contact-submit u-textCenter ">
                  <textarea className="form-control" rows="4" id="message" placeholder = "Comments?"value={this.state.message} onChange={this.onMessageChange} />
              </div>


              <div className = "Contact-submit u-textCenter">
                <input type = "button" class="btn btn-primary" type="submit"/>
              </div>

            </form>
          </div>
      );
    }
  
    onNameChange = (event) => {this.setState({name: event.target.value})
    }
  
    onEmailChange = (event) => { this.setState({email: event.target.value})
    }
  
    onMessageChange = (event) => {this.setState({message: event.target.value})
    }
  }



export default Contact 

