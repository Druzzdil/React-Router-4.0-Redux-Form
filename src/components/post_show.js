import React, { Component } from 'react';
import { connect } from "react-redux";
import { showSinlePost } from '../actions/index';
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
  }

componentDidMount() {
    this.props.showSinlePost();
}


renderPost(){
     return _.map(this.props.posts, post => {
       return (
          <li className="list-group-item"key={post.id}>{post.id}</li>
        )
     })
  }


  render() {
    return (
    <div>
        show new post
        {this.renderPost()}}
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


export default connect(mapStateToProps, {showSinlePost})(PostShow);



//this is some deep wierd shit!


