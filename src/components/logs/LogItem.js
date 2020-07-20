import React from 'react';
import PropTypes from 'prop-types';

const LogItem = ({ log }) => {
  const { id, message, attention, date, tech } = log;

  return (
    <li className='logs-item'>
      <a
        href='#edit-log-moadl'
        className='logs-link'
        style={{ color: `${attention ? 'red' : 'rgb(36, 121, 10)'}` }}
      >
        {message}
      </a>
      <p className='logs-details'>
        <span>
          ID: <strong>{id}</strong>
        </span>
        <span>
          Last updated by: <strong>{tech}</strong>
        </span>
        <span>{date}</span>
      </p>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
