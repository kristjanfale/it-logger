import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addNewLog } from '../../slices/logSlice';

const AddLogModal = () => {
  const [description, setDescription] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const dispatch = useDispatch();

  // Get number of logs (for new log's ID)
  const logs = useSelector((state) => state.log.logs);
  const logId = logs.length + 1;

  const onSubmit = () => {
    if (description && tech) {
      dispatch(
        addNewLog({
          id: logId,
          message: description,
          attention,
          tech,
        })
      );
    }

    // Clear form
    setDescription('');
    setAttention(false);
    setTech('');

    //! Close modal
  };

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
          value={tech}
          onChange={(e) => {
            setTech(e.target.value);
          }}
          className='modal-input'
        >
          <option value=''>Select a Technician</option>

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
            checked={attention}
            value={attention}
            onChange={() => {
              setAttention(!attention);
            }}
          />
          <span></span>
        </label>

        <a href='#!' onClick={onSubmit} className='modal-submit'>
          Add log
        </a>
      </form>
    </div>
  );
};

export default AddLogModal;
