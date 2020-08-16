import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteTech } from '../../slices/techSlice';

const TechItem = ({ tech }) => {
  const { id, name } = tech;

  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteTech(id));
  };

  return (
    <li className='tech-item'>
      <p>
        <span className='tech-name'>{name}</span>
      </p>

      {/* DELETE BUTTON */}
      <button className='tech-delete' onClick={onDelete}>
        X
      </button>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechItem;
