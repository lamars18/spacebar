import {
    GET_ARTICLES,
    DELETE_ARTICLE,
    ADD_ARTICLE,
    GET_ARTICLE,
    UPDATE_ARTICLE
  } from './types';
  import axios from 'axios';
  
  export const getArticles = () => async dispatch => {
    try {
      const res = await axios.get('/api/articles');

      // if is not empty, dispatch
      if (!(Object.keys(res).length === 0 && res.constructor === Object)) {
        dispatch({
          type: GET_ARTICLES,
          payload: res.data
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  
  export const getArticle = id => async dispatch => {
    try {
      const res = await axios.get(
        `/api/articles/${id}`
      );

      if (!(Object.keys(res).length === 0 && res.constructor === Object)) {
        console.log("reducer get one article");
        console.log(res.data[0]);
        dispatch({
          type: GET_ARTICLE,
          payload: res.data[0]
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  
  export const deleteArticle = id => async dispatch => {
    try {
      await axios.delete(`/api/articles/${id}`);
      dispatch({
        type: DELETE_ARTICLE,
        payload: id
      });
    } catch (e) {
      dispatch({
        type: DELETE_ARTICLE,
        payload: id
      });
    }
  };
  
  export const addArticle = article => async dispatch => {
    try {
      const res = await axios.post(
        '/api/articles',
        article
      );

      if (!(Object.keys(res).length === 0 && res.constructor === Object)) {
        dispatch({
          type: ADD_ARTICLE,
          payload: res.data
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  
  export const updateArticle = article => async dispatch => {
    try {
      const res = await axios.put(
        `/api/articles/${article._id}`,
        article
      );

      if (!(Object.keys(res).length === 0 && res.constructor === Object)) {
        dispatch({
          type: UPDATE_ARTICLE,
          payload: res.data
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  