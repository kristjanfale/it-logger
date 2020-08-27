import React from 'react';
import { useDispatch } from 'react-redux';

import { filterLogs, clearFilterLogs } from '../../slices/logSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const onChange = (e) => {
    if (e.target.value === '') {
      dispatch(clearFilterLogs());
    } else {
      dispatch(filterLogs(e.target.value));
    }
  };

  return (
    <nav className='nav'>
      <form>
        <input
          id='search-input'
          type='text'
          className='search-input'
          onChange={onChange}
        />
        <label htmlFor='search-input' className='search-label'>
          <div className='search-icon'></div>
        </label>
      </form>
    </nav>
  );
};

export default SearchBar;
