import React, { useState } from 'react';

const AddLogModal = () => {
  const [description, setDescription] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  return (
    <div className='modal'>
      <h2 className='modal-title'>Add New Log</h2>

      <form className='modal-form'>
        <label htmlFor='description' className='modal-label'>
          Log Description
        </label>
        <input
          type='text'
          name='description'
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className='modal-input'
        />

        <label htmlFor='tech' className='modal-label'>
          Tech
        </label>
        <select
          name='tech'
          valuie={tech}
          onChange={(e) => {
            setTech(e.target.value);
          }}
          className='modal-input'
        >
          <option value='Kr neke'>Kr neke</option>
          <option value='Hard coded...'>Hard coded...</option>
          <option value='Slabbb'>Slabbb</option>
        </select>

        <label htmlFor='attention' className='modal-label'>
          Needs Attention
        </label>
        <label className='modal-checkbox'>
          <input
            type='checkbox'
            id='attention'
            name='attention'
            value={attention}
            onChange={(e) => {
              setAttention(e.target.value);
            }}
          />
          <span></span>
        </label>
      </form>
    </div>
  );
};

export default AddLogModal;
