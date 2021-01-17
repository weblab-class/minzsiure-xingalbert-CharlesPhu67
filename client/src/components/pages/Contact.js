import React from 'react';
import ExplainButton from "../modules/ExplainButton.js";


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

        <div className="App">
          <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
            <div className="Contact-header u-textCenter">
                <label> Name</label>
                <input  className="form-control" id="name" value={this.state.name} onChange={this.onNameChange} />
            </div>
            <div className="Contact-body u-textCenter">
                <label> Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange} />
            </div>
            <div className="Contact-submit ">
                <label >Message</label>
                <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>

            <div> 

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

