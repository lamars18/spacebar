import React, { Component } from 'react';
// import { Consumer } from '../../context';

import ArticleItem from "../ArticleItem";
import "./Articles.css";
import moment from 'moment';

class Articles extends Component {

  ///////////////////////////
  // handle state
  ///////////////////////////

   state = {
    comments: []
  };
  
  // return in utc to convert the date from the offset provided to UTC
  // these dates have no timezone
  formatDate = (date) => moment.utc(date).format('MM/DD/YYYY');

  render() {
    const {_id, title, date, url, summary, author, comments} = this.props;

    return (

      <div className="card card-body mb-3">

        <h6 className="text-left">{title} 
          <i className="fas fa-caret-down ml-2" style={{ cursor: 'pointer' }}></i>
          <i className="fas fa-times app-color-2" style={{cursor: 'pointer', float: 'right'}}></i>
          <a href="/contact/edit/1">
            <i className="fas fa-pencil-alt app-color-4" style={{cursor: 'pointer', float: 'right', marginRight: '1rem'}}></i>
          </a>
        </h6>

        <small className="text-left text-muted">Written by {author} on {this.formatDate(date)}</small>

        <ArticleItem
          id={_id}
          key={_id}
          title={title}
          date={date}
          url={url}
          summary={summary}
          author={author}
          comments={comments}
        />

      </div>

    )
  }
}

export default Articles;
