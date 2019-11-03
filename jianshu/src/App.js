import React from 'react';
import {Globalstyle} from './style.js';
import Header from './common/header/index';
import store from './store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Header></Header>
      <Globalstyle/>
    </Provider>
  );
}

export default App;
