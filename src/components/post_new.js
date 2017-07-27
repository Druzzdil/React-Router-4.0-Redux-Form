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
        {field.meta.error}
      </div>
    )
}

onSubmit(values){
  console.log(values)
}

  render() {
    console.log(this.props, 'popopo')
    const {handleSubmit} = this.props
    return (
    <div>
       <div className="text-xs-right">
           <Link to="/" className="btn btn-primary">Back to Main Page</Link>
        </div>
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field 
          label="Title For Post"
          name="title" 
          component={this.renderField}
        />
        <Field 
          name="categories" 
          label="Categories"
          component={this.renderField}
        />
        <Field 
          name="content" 
          label="Post Content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
    );
  }
}


//helpers functions

function validate(values){
  const error = {}
  if (!values.title || values.title.length < 3) {
    error.title = "enter the title that is at least 3 characters"
  }
  if (!values.categories) {
    error.categories = "enter the categories"
  }
  if (!values.content) {
    error.content = "enter the content"
  }
  return error;
}

export default reduxForm({
  validate,
  form: 'PostNewForm'

})(PostNew)


