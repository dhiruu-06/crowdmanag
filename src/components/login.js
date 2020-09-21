import React, {Component} from 'react';
import fire from './fire';
import './App.css';
import {Link } from 'react-router-dom';
import Home from './Home';

class login extends Component{

signUp() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Signed Up');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }

  login() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Logged In');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }

  render(){
     return(
        <div  className="login" style={{ textAlign: 'center' }}>
        <div className="email">
          <div  >Email</div>
          <input id="email" placeholder="Enter Email.." type="text"/>
        </div>
        <div className="password">
          <div  >Password</div>
          <input id="password" placeholder="Enter Password.." type="text"/>
        </div>
        <div>
        <Link to="/Home">
        <button style={{margin: '10px'}} onClick={this.login}>Login</button>
        </Link>
        </div>
        <div className="signUp">
        <button style={{margin: '10px'}} onClick={this.signUp}>Sign Up</button>
        </div>
        
      </div>
     )
  }
}
export default login;