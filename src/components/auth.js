import React, { Component } from 'react';
import fire from './fire'
import login from './login.js';
import Home from './Home.js';

class auth extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }

  render() {
    return (
      
        { this.state.user ? (<Home />) : (<Login />)}
      
    );
  }
}

export default auth;