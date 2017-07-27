import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPosts } from '../actions/index';
import _ from 'lodash';

 class PostIndex extends Component {

  constructor(props){
    super(props);
  }


  componentDidMount() {
    this.props.fetchPosts();
  }


  // only lodash map can iterate over object properties


  renderPost(){
     return _.map(this.props.posts, post => {
       return (
          <li key={post.id}>{post.title}</li>
        )
     })
  }


  render() {
    console.log(this.props.posts)
    return (
      <div>Post piesek
        <ul>
          {this.renderPost()}
        </ul>
      </div>
    );
  }
}




function  mapStateToProps(state){
  return {posts: state.posts}
}


export default connect(mapStateToProps, {fetchPosts})(PostIndex);