import {
    GET_CHAT_USER
  } from './types';
//   import axios from 'axios';
  
  export const addChatUser = userName => async dispatch => {
    // const res = await axios.post(
    //   '/chat/users',
    //   userName
    // );

    const res = await fetch('/chat/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName }),
      })
    .then(response => {
        this.setState({
        currentUsername: userName,
        currentScreen: 'ChatScreen',
        })
    })
    .catch(error => console.error('error', error))


    dispatch({
      type: GET_CHAT_USER,
      payload: res.data
    });
  };