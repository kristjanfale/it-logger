import React, { Fragment } from 'react';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import Buttons from './components/layout/Buttons';

// REDUX
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <Logs />
          <Buttons />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
