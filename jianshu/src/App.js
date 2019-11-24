import React from 'react';
import {Globalstyle} from './style.js';
import Header from './common/header/index';
import store from './store';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <div>
      <Header></Header>
      <BrowserRouter>
        <div>
        <Route path = '/' exact render = { () => <div>home</div>}></Route>
        <Route path = '/detail' exact render = { () => <div>detail</div>}></Route>
        </div>
      </BrowserRouter>
      <Globalstyle/>
      </div>
    </Provider>
  );
}

export default App;
