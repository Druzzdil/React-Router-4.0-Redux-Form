import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Main extends React.Component {
  render() { return (<h1>Main</h1>)}
}


class First extends React.Component {
  render() { return (<h1>hey dude !</h1>)}
}

class Second extends React.Component {
  render() { return (<h1>farewell to the moon !</h1>)}
}


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
   <BrowserRouter>
      <div>
        <Route path="/first" component={First}/>
        <Route path="/second" component={Second}/>
      </div>
   </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
