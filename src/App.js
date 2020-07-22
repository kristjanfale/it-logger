import React from 'react';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import Buttons from './components/layout/Buttons';

import './App.css';

function App() {
  return (
    <div>
      <SearchBar />
      <div className='container'>
        <Logs />
        <Buttons />
      </div>
    </div>
  );
}

export default App;
