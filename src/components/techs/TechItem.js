import React from 'react';
import PropTypes from 'prop-types';

const TechItem = ({ tech }) => {
  const { id, name } = tech;

  return (
    <li className='tech-item'>
      <p>
        <span className='tech-name'>{name}</span>
      </p>

      {/* DELETE BUTTON */}
      <button className='tech-delete'>X</button>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechItem;
