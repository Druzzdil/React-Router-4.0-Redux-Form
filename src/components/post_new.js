import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPosts } from '../actions/index';
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form'
// const { DOM: { input, select, textarea } } = React
//redux-form
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

 class PostNew extends Component {


renderTitleField(field){
    return (
      <div> 
        <input
          tpe="text"
          {...field.input}
        
        />
      
      </div>
    )
}


  render() {
    return (
      <form>
        <Field 
          name="title" 
          component={this.renderTitleField}
        />

      </form>
    );
  }
}




export default reduxForm(
  {form: 'PostNewForm'}
)(PostNew)