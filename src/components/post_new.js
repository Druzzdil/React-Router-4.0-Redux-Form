import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPosts } from '../actions/index';
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form'

//redux-form
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

 class PostNew extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        test new post
      </div>
    );
  }
}




function  mapStateToProps(state){
  return {posts: state.posts}
}


export default connect(mapStateToProps, {fetchPosts})(PostNew);