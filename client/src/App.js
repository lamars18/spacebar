///////////////////
// dependencies
///////////////////
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import axios from 'axios';
//components
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
// pages
import Home from './components/Home';
import NewsFeed from './components/NewsFeed';
import NotFound from './components/NotFound';
import About from './components/About';
// Context UI
import { Provider } from './context';
// stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  //////////////////////////////////////////////
  // handle communicating with express server
  //////////////////////////////////////////////
  state = {
    // articles: ''
  };

  async componentDidMount() {
      // let res = await axios.get('/api/scrape');
  
      // console.log(res.data);
      // this.setState({ articles: res.data });
  }

  /////////////////////////
  // app render
  /////////////////////////
  render() {
    return (
      <Provider>
        <Router>
          <div className="App fluid-container">
            <Jumbotron
              title="SpaceBar"
              titleicon=""
              message="Enter some content here..."
            ></Jumbotron>

            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/api/articles' component={NewsFeed} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>

            <Footer></Footer>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
