import React, { Fragment } from 'react';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import Buttons from './components/layout/Buttons';

import './App.css';

function App() {
  return (
    <Fragment>
      <SearchBar />
      <div className='container'>
        <Logs />
        <Buttons />
      </div>
    </Fragment>
  );
}

export default App;
