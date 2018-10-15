import React, { Component } from 'react';

import Wrapper from "../Wrapper";
import BtnRound from "../BtnRound";

const cardButtons = [
  {
    "id": 1,
    "type": "link",
    "datavalue": "read",
    "title": "Read",
    "icon": "fas fa-book-open"
  },
  {
    "id": 2,
    "type": "button",
    "datavalue": "save",
    "title": "Save",
    "icon": "fas fa-thumbtack"
  },
  {
    "id": 3,
    "type": "button",
    "datavalue": "delete",
    "title": "Delete",
    "icon": "far fa-trash-alt"
  },
  {
    "id": 4,
    "type": "button",
    "datavalue": "comment",
    "title": "Comment",
    "icon": "far fa-comments fa-lg"
  }
];

class ArticleItem extends Component {

  ///////////////////////////
  // handle state
  ///////////////////////////

  // load the images from the json array
  state = {
    cardButtons: cardButtons,
    comments: []
  };


  render() {
    const {summary, url, comments} = this.props;

    return (

      <div> 

        <hr></hr>
        <p className="card-text">{summary}</p>
        
        <div className="mt-auto">
          <p className="text-right mb-1">
            <small><span id="comment-length-{this.props._id}">{comments.length}</span> Comments</small>
          </p>

          <Wrapper>
            {/* <a target="_blank" href={url} class="btn btn-success mb-2 mx-1"></a> */}
            {this.state.cardButtons
              .filter(btn => btn.type === "link")
              .map(linkBtn => (
                <a 
                  key={linkBtn.id}
                  href={url} 
                  className={`card-btn mt-auto app-border-color-1 bg-white app-color-1 `}
                  target="_blank" 
                  rel="noopener noreferrer"
                  role="button"
                >
                  <i className={`${linkBtn.icon} mt-3`} aria-hidden="true" style={{verticalAlign: 'middle'}} />                    
                </a>
            ))}

            {this.state.cardButtons
              .filter(btn => btn.type !== "link")
              .map(cardBtn => (
                <BtnRound
                  id={cardBtn.id}
                  key={cardBtn.id}
                  data-value={cardBtn.datavalue}
                  title={cardBtn.title}
                  icon={cardBtn.icon}
                  url= {url ? url : null}
                  // onClick={this.props.handleBtnClick}
                />
            ))}
            </Wrapper>
  
        </div>

      </div>

      // <div className="card card-body mb-3">

      //   <h6 className="text-left">{this.props.title} 
      //     <i className="fas fa-caret-down ml-2" style={{ cursor: 'pointer' }}></i>
      //     <i className="fas fa-times app-color-2" style={{cursor: 'pointer', float: 'right'}}></i>
      //     <a href="/contact/edit/1">
      //       <i className="fas fa-pencil-alt app-color-4" style={{cursor: 'pointer', float: 'right', marginRight: '1rem'}}></i>
      //     </a>
      //   </h6>

      //   <small className="text-left text-muted">Written by {this.props.author} on {this.formatDate(this.props.date)}</small>

      // </div>

    )
  }
}

export default ArticleItem;