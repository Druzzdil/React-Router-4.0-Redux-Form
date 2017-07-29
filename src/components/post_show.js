import React, { Component } from 'react';
import { connect } from "react-redux";
import { showSinglePost } from '../actions/index';
//import _ from 'lodash';
//import { Field, reduxForm } from 'redux-form'
//import {createPost} from '../actions';
// if we import a single function from a file it has to be in curly braces - destructing
// import { createStore, combineReducers } from 'redux'
//import { reducer as formReducer } from 'redux-form'

import {Link}  from 'react-router-dom'

class PostShow extends Component {
  constructor(props){
    super(props)
    // this.state = {
    //     title: {},
    //     categories: "",
    //     content: ""
    // }
  }

componentDidMount() {
    const {id} = this.props.match.params
    // get the id from the params object which is provide by react router by itself
    this.props.showSinglePost(id);
}

  render() {
    console.log(this.props.showSinglePost(), 'ppppppp')
    const { post } = this.props;

    if (!post) {
        return <div>Loading...</div>
    }

    return (
    <div>
        <h3>Title: {post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <h6>{post.content}</h6>
    </div>
    );
  }
}


//helpers functions

function mapStateToProps({ posts }, ownProps) {
  return {
    post: posts[ownProps.match.params.id]
  };
}


export default connect(mapStateToProps, {showSinglePost})(PostShow);



//this is some deep wierd shit!


