// import React from "react";
import React, { Component } from 'react';
import { Consumer } from '../../context';

import Wrapper from "../Wrapper";
import Articles from "../Articles";
import "./Home.css";
// import articles from "./articlesTemp.json";

class Home extends Component {

  ///////////////////////////
  // handle state
  ///////////////////////////

  // load the images from the json array
  state = {
    // articles: articles
  };
  
  render() {
    return (
      <React.Fragment>
        {/* <div className="">HOME PAGE</div> */}

        <div className="row text-center mx-auto mt-2">

          <div id="profile-section" className="col-md-2 container">
            <h6 className="app-display-4">User Profile</h6>

          </div>

          <div id="newsfeed-section" className="col-md-3 home">
            <h6 className="app-display-4">Latest News</h6>

            {/* <!-- 2 line heading card view --> */}
            <Wrapper>
              <Consumer>
                { (value) => (    
                  <React.Fragment>
                    {value.articles.map(articleItem => (
                        <Articles
                        id={articleItem._id}
                        key={articleItem._id}
                        title={articleItem.title}
                        date={articleItem.date}
                        url={articleItem.url}
                        summary={articleItem.summary}
                        author={articleItem.author}
                        comments={articleItem.comments}
                        />
                    ))} 
                  </React.Fragment>
                ) }
              </Consumer>
            </Wrapper>

            {/* <!-- full card view --> */}
            {/* <Wrapper>
              <Consumer>
                { (value) => (    
                  <React.Fragment>
                    {value.articles.map(articleItem => (
                        <Card
                          id={articleItem._id}
                          key={articleItem._id}
                          title={articleItem.title}
                          date={articleItem.date}
                          url={articleItem.url}
                          summary={articleItem.summary}
                          author={articleItem.author}
                          comments={articleItem.comments}
                          // onClick={ e => this.handleImageSelected(e, articleItem.id)}
                        />
                      ))}
                  </React.Fragment>
                ) }
              </Consumer>
            </Wrapper> */}

          </div>

          <div id="blog-section" className="col-md-3 container">
            <h6 className="app-display-4">Posts</h6>

          </div>

          <div id="chat-section" className="col-md-2 container">
            <h6 className="app-display-4">Trending/Chat</h6>

          </div>
        </div>

      </React.Fragment>
    )
  }
}

export default Home;
