import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Articles from '../../articles/Articles';
// import Wrapper from '../../layout/Wrapper';
import ChatApp from '../../ChatApp/ChatApp';
import "./Home.css";
import UserProfile from '../../Profile/Profile';

class Home extends Component {

  render() {
    return (
      <React.Fragment>
        <div id="home-page" className="mt-4 css-grid-wrapper app-bg-color-3 mx-5 mb-4">

          {/* Profile */}
          <div id="profile-section" className="box a">
            {/* <h6 className="app-display-4">User Profile</h6> */}
            <div className="d-flex justify-content-around">
              <UserProfile />

<div className="ml-4">
  <ul className="list-group">
    <li className="list-group-item">
      <div className="">
        <h4>Announcement 1</h4>
        <p>
          <img src="http://baconmockup.com/50/50" alt="" className="img-responsive float-left mr-3"/>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eveniet. Tenetur laborum quod cum excepturi recusandae porro sint quas soluta!
        </p>
        {/* <a href="/">Link</a> */}
      </div>
    </li>
    <li className="list-group-item">
      <div className="">
        <h4>Announcement 1</h4>
        <p>
          <img src="http://baconmockup.com/50/50" alt="" className="img-responsive float-left mr-3"/>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eveniet. Tenetur laborum quod cum excepturi recusandae porro sint quas soluta!
        </p>
        {/* <a href="/">Link</a> */}
      </div>
    </li>
    <li className="list-group-item">
      <div className="">
        <h4>Announcement 1</h4>
        <p>
          <img src="http://baconmockup.com/50/50" alt="" className="img-responsive float-left mr-3"/>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eveniet. Tenetur laborum quod cum excepturi recusandae porro sint quas soluta!
        </p>
        {/* <a href="/">Link</a> */}
      </div>
    </li>
  </ul>
</div> 

            </div>
            {/* <div className="vl"></div> */}
          </div>

          {/* News Feed */}
          <div id="newsfeed-section" className="box b">
            <h6 className="app-display-4">Headlines
              <a key='scrape' href="/api/articles/scrape"  className="btn app-btn-primary app-btn-bg-white app-btn-border-primary right-button" title="Scrape Headlines" role="button">
                <i className="fa fa-search" /> 
              </a>
            </h6>
            <Articles />
          </div>

          {/* Blog */}
          <div id="blog-section" className="box d">
            <h6 className="app-display-4">Blog</h6>
            {/* <div> */}
              <iframe title="blog-area" src ="https://coderdevelopers.blogspot.com/" width="100%" height="100%"> </iframe>
            {/* </div> */}
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
