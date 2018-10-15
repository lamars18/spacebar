///////////////////
// dependencies
///////////////////
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import Navigation from './components/layout/Navigation';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// pages
import About from './components/pages/About';
import Home from './components/pages/Home';
import NewsFeed from './components/pages/NewsFeed';
import NotFound from './components/pages/NotFound';

// Manage App State
import { Provider } from 'react-redux';
import store from './store';

// stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//////////////////////////////////////////////
// App component
//////////////////////////////////////////////
class App extends Component {

  state = {
    appName: "SpaceBar",
    orgName: "GT Project Team",
    year: new Date().getFullYear()
  };

  /////////////////////////
  // when component mounts
  /////////////////////////
  async componentDidMount() {
      // let res = await axios.get('/api/scrape');
  
      // console.log(res.data);
      // this.setState({ articles: res.data });
  }

  /////////////////////////
  // render
  /////////////////////////
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App fluid-container">
            <Navigation 
              branding={this.state.appName}
            />
            <Header
              title={this.state.appName}
              message="Discover what's out there."
            ></Header>

            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path="/about" component={About} />
              <Route path='/api/articles' component={NewsFeed} />
              <Route component={NotFound} />
            </Switch>

            <Footer
              year={this.state.year}
              orgName={this.state.orgName}
              >
            </Footer>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
