import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  
  //////////////////////////////////////////////
  // handle communicating with express server
  //////////////////////////////////////////////
  state = {
    articles: ''
  };

  async componentDidMount() {
      let res = await axios.get('/api/scrape');
  
      // res = await axios.get('/api/articles');
      console.log(res.data);

      this.setState({ articles: res.data });
  }

  /////////////////////////
  // app render
  /////////////////////////
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default App;
