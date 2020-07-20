import React from 'react';

const SearchBar = () => {
  return (
    <nav className='nav'>
      <form>
        <input id='search-input' type='text' className='search-input' />
        <label htmlFor='search-input' className='search-label'>
          <div className='search-icon'></div>
        </label>
      </form>
    </nav>
  );
};

export default SearchBar;
