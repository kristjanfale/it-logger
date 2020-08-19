import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { editLog } from '../../slices/logSlice';

const EditLogModal = ({ log, closeModal }) => {
  const [description, setDescription] = useState(log.message);
  const [attention, setAttention] = useState(log.attention);
  const [tech, setTech] = useState(log.tech);

  const techs = useSelector((state) => state.tech.techs);
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (description && tech !== '') {
      dispatch(
        editLog({
          id: log.id,
          message: description,
          attention,
          tech,
          date: new Date().toLocaleString(),
        })
      );
    }

    // Clear form
    setDescription('');
    setAttention(false);
    setTech('');

    // Close modal
    closeModal();
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
          {techs.map((tech) => (
            <option value={tech.name} key={tech.id}>
              {tech.name}
            </option>
          ))}
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
