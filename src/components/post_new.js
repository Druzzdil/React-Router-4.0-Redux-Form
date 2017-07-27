import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPosts } from '../actions/index';
import _ from 'lodash';

 class PostNew extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>Post new!
            
      </div>
    );
  }
}




function  mapStateToProps(state){
  return {posts: state.posts}
}


export default connect(mapStateToProps, {fetchPosts})(PostNew);