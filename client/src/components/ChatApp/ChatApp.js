import React, { Component } from 'react'
import UsernameForm from './UsernameForm'
import ChatScreen from './ChatScreen'
// import axios from 'axios';
// var Pusher = require('pusher');
require('dotenv').config( );

// const PUSHER_URL = process.env.PUSHER_URL || "http://localhost:3001";

class ChatApp extends Component {
  constructor() {
    super()
    this.state = {
      currentUsername: '',
      currentScreen: 'WhatIsYourUsernameScreen',
    }
    this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this)
  }

  // added this method for chatkit heroku
  // OnComponentDidMount() {
  //     // if prod

  //     var pusher = new Pusher({
  //       appId: '625661',
  //       key: '6966b17ce803991af55e',
  //       secret: '238ccf508d590242c96e',
  //       cluster: 'us2',
  //       encrypted: true
  //     });

  //     pusher.trigger('my-channel', 'my-event', {
  //       "message": "hello world"
  //     });
  // }

  onUsernameSubmitted(username) {
    console.log(username);
    // console.log(process.env.PUSHER_URL);

    // let axiosConfig = {
    //   headers: {
    //       'Content-Type': 'application/json;charset=UTF-8',
    //       "Access-Control-Allow-Origin": "*",
    //   }
    // };

    // below worked local
    // fetch('http://localhost:3001/users', {
    fetch('/users', {

    // axios.post('http://localhost:3001/chat/users', username, axiosConfig) 
    // axios.post('/chat/users', JSON.stringify({ username }), axiosConfig) 
    // fetch('/chat/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    })
      .then(response => {
        this.setState({
          currentUsername: username,
          currentScreen: 'ChatScreen',
        })
      })
      .catch(error => console.error('error', error))

    // fetch('http://localhost:3001/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ username }),
    // })
    //   .then(response => {
    //     this.setState({
    //       currentUsername: username,
    //       currentScreen: 'ChatScreen',
    //     })
    //   })
    //   .catch(error => console.error('error', error))
  }

  render() {
    if (this.state.currentScreen === 'WhatIsYourUsernameScreen') {
      return <UsernameForm onSubmit={this.onUsernameSubmitted} />
    }
    if (this.state.currentScreen === 'ChatScreen') {
      return <ChatScreen currentUsername={this.state.currentUsername} />
    }
  }
}

export default ChatApp