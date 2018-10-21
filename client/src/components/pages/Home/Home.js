import React, { Component } from 'react';
import Articles from '../../articles/Articles';
import ChatApp from '../../ChatApp/ChatApp';
import "./Home.css";
import UserProfile from '../../Profile/Profile';

class Home extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="row text-center mx-auto mt-4">
          {/* Profile */}
          <div id="profile-section" className="col-md-2 container my-4">
            {/* <h6 className="app-display-4">User Profile</h6> */}
            <UserProfile />
          </div>
          {/* News Feed */}
          <div id="newsfeed-section" className="col-md-3 home">
            <h6 className="app-display-4">Headlines</h6>
            <Articles />
          </div>
          {/* Blog */}
          {/* <div id="blog-section" className="col-md-3 containe">
            <h6 className="app-display-4">Posts</h6>

          </div> */}
          {/* Chat */}
          <div id="chat-section" className="col-md-2 container">
            <h6 className="app-display-4">Chat</h6>
            <ChatApp></ChatApp>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home;
