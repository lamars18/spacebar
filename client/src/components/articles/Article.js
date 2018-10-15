import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteArticle } from '../../actions/articleActions';

class Article extends Component {
  state = {
    showArticleInfo: false
  };

  onDeleteClick = id => {
    this.props.deleteArticle(id);
  };

  render() {
    const { id, name, email, phone } = this.props.article;
    const { showArticleInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{' '}
          <i
            onClick={() =>
              this.setState({
                showArticleInfo: !this.state.showArticleInfo
              })
            }
            className="fas fa-sort-down"
            style={{ cursor: 'pointer' }}
          />
          <i
            className="fas fa-times"
            style={{ cursor: 'pointer', float: 'right', color: 'red' }}
            onClick={this.onDeleteClick.bind(this, id)}
          />
          <Link to={`article/edit/${id}`}>
            <i
              className="fas fa-pencil-alt"
              style={{
                cursor: 'pointer',
                float: 'right',
                color: 'black',
                marginRight: '1rem'
              }}
            />
          </Link>
        </h4>
        {showArticleInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Article.propTypes = {
  article: PropTypes.object.isRequired,
  deleteArticle: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteArticle }
)(Article);
