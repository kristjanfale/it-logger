import React from 'react';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';

import './App.css';

function App() {
  return (
    <div>
      <SearchBar />
      <div className='container'>
        <Logs />
      </div>
    </div>
  );
}

export default App;
