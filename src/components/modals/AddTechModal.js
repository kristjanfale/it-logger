import React, { useState } from 'react';

const AddTechModal = ({ closeModal }) => {
  const [name, setName] = useState('');

  const onSubmit = () => {
    console.log(name);

    // Clear form
    setName('');

    // Close modal
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
