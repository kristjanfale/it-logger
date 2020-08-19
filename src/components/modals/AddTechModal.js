import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { addTech } from '../../slices/techSlice';

const AddTechModal = ({ closeModal }) => {
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const onSubmit = () => {
    if (name) {
      dispatch(
        addTech({
          id: nanoid(),
          name,
        })
      );
    }

    // Clear form
    setName('');

    // Close MODAL
    closeModal();
  };

  return (
    <div className='modal'>
      <h2 className='modal-title'>Add New Technician</h2>

      <form className='modal-form'>
        <label htmlFor='name' className='modal-label'>
          Technician name
        </label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className='modal-input'
        />

        <a href='#!' onClick={onSubmit} className='modal-submit'>
          Add Tech
        </a>
      </form>
    </div>
  );
};

export default AddTechModal;
