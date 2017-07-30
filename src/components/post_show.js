import React, { Component } from 'react';
import { connect } from "react-redux";
import { showSinglePost, deletePost} from '../actions/index';

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
    const {id} = this.props.match.params;
    // get the id from the params object which is provide by react router by itself
    this.props.showSinglePost(id);
}


onDeleteClick(){
    const {id} = this.props.match.params;
    this.props.deletePost(id, ()=>{
      this.props.history.push('/');
    })

}

  render() {
    const { post } = this.props;

    if (!post) {
        return <div>Loading...</div>
    }

    return (
    <div>
    <Link to="/">Back to list</Link>
    <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>Delete Post</button>
        <h5>Title: {post.title}</h5>
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
  }
}


export default connect(mapStateToProps, {showSinglePost, deletePost })(PostShow);



//this is some deep wierd shit!


