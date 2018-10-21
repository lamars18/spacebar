import React, { Component } from 'react';
import Articles from '../../articles/Articles';
import ChatApp from '../../ChatApp/ChatApp';
import "./Home.css";
import UserProfile from '../../Profile/Profile';

class Home extends Component {

  render() {
    return (
      <React.Fragment>
        <div id="home-page" className="mt-4 css-grid-wrapper mx-5">

          {/* Profile */}
          <div id="profile-section" className="box a">
            {/* <h6 className="app-display-4">User Profile</h6> */}
            <UserProfile />
            {/* <div className="vl"></div> */}
          </div>

          {/* News Feed */}
          <div id="newsfeed-section" className="box b">
            <h6 className="app-display-4">Headlines</h6>
            <Articles />
          </div>

          {/* Blog */}
          <div id="blog-section" className="box d">
            <h6 className="app-display-4">Posts</h6>

          </div>

          {/* Chat */}
          <div id="chat-section" className="box c">
            <h6 className="app-display-4">Chat</h6>
            <ChatApp></ChatApp>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home;
