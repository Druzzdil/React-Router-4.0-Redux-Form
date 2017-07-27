import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPosts } from '../actions/index';
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form'
// const { DOM: { input, select, textarea } } = React
//redux-form
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import {Link}  from 'react-router-dom'

class PostNew extends Component {


renderField(field){
    return (
      <div className="form-group"> 
      <label>{field.label}</label>
        <input className="form-control"
          tpe="text"
          {...field.input}
        
        />
      </div>
    )
}

  render() {
    return (
    <div>
       <div className="text-xs-right">
           <Link to="/" className="btn btn-primary">Back to Main Page</Link>
        </div>
      <form>
        <Field 
          label="Title For Post"
          name="title" 
          component={this.renderField}
        />
        <Field 
          name="tags" 
          label="Tags"
          component={this.renderField}
        />
        <Field 
          name="content" 
          label="Post Content"
          component={this.renderField}
        />
      </form>
    </div>
    );
  }
}




export default reduxForm(
  {form: 'PostNewForm'}
)(PostNew)


