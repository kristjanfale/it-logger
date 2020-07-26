import React, { useState } from 'react';

const AddLogModal = () => {
  const [description, setDescription] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  return (
    <div className='modal'>
      <h2 className='modal-title'>Add New Log</h2>

      <form>
        <label htmlFor='description'>Log Description</label>
        <input
          type='text'
          name='description'
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <label htmlFor='tech'>Tech</label>

        <select
          name='tech'
          valuie={tech}
          onChange={(e) => {
            setTech(e.target.value);
          }}
        >
          <option value='Kr neke'>Kr neke</option>
          <option value='Hard coded...'>Hard coded...</option>
          <option value='Slabbb'>Slabbb</option>
        </select>

        <label htmlFor='attention'></label>
        <input type='text' name='attention' />
      </form>
    </div>
  );
};

export default AddLogModal;
