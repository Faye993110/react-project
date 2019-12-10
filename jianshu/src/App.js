import React from 'react';
import {Globalstyle} from './style.js';
import Header from './common/header/index';
import store from './store';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/home'
import Detail from './pages/detail'

function App() {
  return (
    <Provider store={store}> 
      <BrowserRouter>
      <Header></Header>
        <div>
        <Route path = '/' exact component = {Home}></Route>
        <Route path = '/detail/:id' exact component = {Detail}></Route>
        </div>
      </BrowserRouter>
      <Globalstyle/>
    </Provider>
  );
}

export default App;
