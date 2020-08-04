import React, { useState } from 'react';

const EditLogModal = ({ log }) => {
  const [description, setDescription] = useState(log.message);
  const [attention, setAttention] = useState(log.attention);
  const [tech, setTech] = useState(log.tech);

  const onSubmit = () => {
    console.log(description, attention, tech);

    // Clear form
    setDescription('');
    setAttention(false);
    setTech('');

    // Close modal
  };

  return (
    <div className='modal'>
      <h2 className='modal-title'>Edit Log</h2>

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
          value={tech}
          onChange={(e) => {
            setTech(e.target.value);
          }}
          className='modal-input'
        >
          <option value=''>Select a Technician</option>

          <option value='Bobo Smrade'>Bobo Smrade</option>
          <option value='Gandalf'>Gandalf</option>
          <option value='Darth Vader'>Darth Vader</option>
        </select>

        <label htmlFor='attention' className='modal-label'>
          Needs Attention
        </label>
        <label className='modal-checkbox'>
          <input
            type='checkbox'
            id='attention'
            name='attention'
            checked={attention}
            value={attention}
            onChange={() => {
              setAttention(!attention);
            }}
          />
          <span></span>
        </label>

        <a href='#!' onClick={onSubmit} className='modal-submit'>
          Edit log
        </a>
      </form>
    </div>
  );
};

export default EditLogModal;
