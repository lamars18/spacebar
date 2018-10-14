// import React from "react";
import React, { Component } from 'react';
// import Wrapper from "../Wrapper";
// import CardBtn from "../CardBtn";
import "./Articles.css";
import moment from 'moment';

// load up a series of button definitions
const cardButtons = [
  {
    "id": 1,
    "datavalue": "read",
    "title": "Read",
    "icon": "fas fa-book-open"
  },
  {
    "id": 2,
    "datavalue": "save",
    "title": "Save",
    "icon": "fas fa-thumbtack"
  },
  {
    "id": 3,
    "datavalue": "delete",
    "title": "Delete",
    "icon": "far fa-trash-alt"
  },
  {
    "id": 4,
    "datavalue": "comment",
    "title": "Comment",
    "icon": "far fa-comments fa-lg"
  }
];

class Articles extends Component {

  ///////////////////////////
  // handle state
  ///////////////////////////

  // load the images from the json array
  state = {
    cardButtons: cardButtons,
    comments: []
  };
  
  // return in utc to convert the date from the offset provided to UTC
  // these dates have no timezone
  formatDate = (date) => moment.utc(date).format('MM/DD/YYYY');

  render() {
    return (

      <div className="card card-body mb-3">
        <h6 className="text-left">{this.props.title} 
          <i className="fas fa-caret-down ml-2" style={{ cursor: 'pointer' }}></i>
          <i className="fas fa-times app-color-2" style={{cursor: 'pointer', float: 'right'}}></i>
          <a href="/contact/edit/1">
            <i className="fas fa-pencil-alt app-color-4" style={{cursor: 'pointer', float: 'right', marginRight: '1rem'}}></i>
          </a>
        </h6>
        <small className="text-left text-muted">Written by {this.props.author} on {this.formatDate(this.props.date)}</small>
      </div>

    )
  }
}

export default Articles;
