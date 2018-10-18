import React, { Component } from 'react';
import MainNav from '../../layout/MainNav';
import Header from '../../layout/Header';

class Main extends Component {
  state = {
    appName: "SpaceBar",
    orgName: "GT Project Team",
    year: new Date().getFullYear()
  };

  render() {
    return (
      <div>
        <MainNav />
        <Header
          title={this.state.appName}
          message="Discover what's out there."
        ></Header>
      </div>
    )
  }
}

export default Main;
