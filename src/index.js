import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route} from 'react-router-dom';
import PostIindex from './components/post_index';
import reducers from './reducers';
import promise from 'redux-promise';
const createStoreWithMiddleware = applyMiddleware()(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
   <BrowserRouter>
      <div>
        <Route path="/" component={PostIindex} />
      </div>
   </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
