import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Article from './Article';
import { getArticles, scrapeArticles } from '../../actions/articleActions';

class Articles extends Component {
  componentDidMount() {
    this.props.scrapeArticles();
    this.props.getArticles();
  }

  render() {
    const { articles } = this.props;
    
    return (
      <React.Fragment>
        <h6 className="app-display-4">Headlines
          <a href="/api/scrape"  target="_self" className="btn app-btn-primary app-btn-bg-white app-btn-border-primary right-button" title="Scrape Headlines" role="button">
            <i className="fa fa-search" /> 
          </a>
        </h6>

        {articles.map(article => (
          <Article key={article._id} article={article} />
        ))}
      </React.Fragment>
    );
  }
}

Articles.propTypes = {
  articles: PropTypes.array.isRequired,
  getArticles: PropTypes.func.isRequired,
  scrapeArticles: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  articles: state.article.articles
});

export default connect(
  mapStateToProps,
  { getArticles, scrapeArticles }
)(Articles);
