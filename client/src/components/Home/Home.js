// import React from "react";
import React, { Component } from 'react';
import { Consumer } from '../../context';

import Wrapper from "../Wrapper";
import Card from "../Card";
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
        <div className="">HOME PAGE</div>
        <div className="row text-center justify-content-around">
          <div id="newsfeed-section" className="col-md-4 home">
            <h6>SECTION 1</h6>
            <Wrapper>
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
            </Wrapper>
          </div>

          <div id="blog-section" className="col-md-4 container">
            <h6>SECTION 2</h6>
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
          </div>

          <div id="chat-section" className="col-md-4 container">
            <h6>SECTION 3</h6>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home;
