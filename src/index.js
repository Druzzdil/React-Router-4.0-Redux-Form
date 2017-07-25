import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {} from 'react-router-dom';
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);


class First extends React.Component {
  render() { return (<h1>hey dude !</h1>)}
}

class Second extends React.Component {
  render() { return (<h1>farewell to the moon !</h1>)}
}


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <First />
  </Provider>
  , document.querySelector('.container'));
