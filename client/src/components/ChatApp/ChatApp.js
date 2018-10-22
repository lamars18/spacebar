import React, { Component } from 'react'
import UsernameForm from './UsernameForm'
import ChatScreen from './ChatScreen'
// import { connect } from 'react-redux';

class ChatApp extends Component {
  constructor() {
    super()
    this.state = {
      currentUsername: '',
      currentScreen: 'WhatIsYourUsernameScreen',
    }
    this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this)
    // this.onIsValidChatUser = this.onIsValidChatUser.bind(this)
  }

  onUsernameSubmitted(username) {
    console.log("OnUserNameSubmitted: " + username);

    fetch('/chat/users', {
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
  }

  onIsValidChatUser(username) {
    console.log("onIsValidChatUser: " + username);

    fetch('/chat/users', {
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
  }

  render() {
    if (this.state.currentScreen === 'WhatIsYourUsernameScreen') {
      return <UsernameForm onSubmit={this.onUsernameSubmitted} />
    }
    if (this.state.currentScreen === 'ChatScreen') {
      return <ChatScreen currentUsername={this.state.currentUsername} />
    }

    ///////////////////////////////////////////////////////////////////////
    // if isValidChatUser then go to ChatScreen, else prompt for UserName
    ///////////////////////////////////////////////////////////////////////
    // if (this.onIsValidChatUser(this.props.loggedInUser)) {
    //   return <ChatScreen currentUsername={this.props.currentUsername} />
    // } else {
    //   return <UsernameForm onSubmit={this.onUsernameSubmitted} />
    // }

  }
}

// const mapStateToProps = state => {
//   return {
//     loggedInUser: state.loggedInUser
//   };
// }

export default ChatApp
// export default connect(mapStateToProps,{}, null, )(ChatApp);