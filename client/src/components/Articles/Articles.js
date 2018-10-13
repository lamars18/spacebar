// import React from "react";
import React, { Component } from 'react';
import Wrapper from "../Wrapper";
import CardBtn from "../CardBtn";
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
        <h5 className="text-left">{this.props.title} 
          <i className="fas fa-sort-down" style={{ cursor: 'pointer' }}></i>
          <i className="fas fa-times" style={{cursor: 'pointer', float: 'right', color: 'red'}}></i>
          <a href="/contact/edit/1">
            <i className="fas fa-pencil-alt" style={{cursor: 'pointer', float: 'right', color: 'black', marginRight: '1rem'}}></i>
          </a>
        </h5>
        <h6 className="text-left text-muted">Written by {this.props.author} on {this.formatDate(this.props.date)}</h6>
      </div>

    )
  }
}

export default Articles;
