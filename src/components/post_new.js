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
      <form>
        <Field 
          name="title" 
          component={}
          
          
          />
         
      </form>
    );
  }
}




export default reduxForm(
  {form: 'PostNewForm'}
)(PostNew)