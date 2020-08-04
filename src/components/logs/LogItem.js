import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import EditLogModal from '../modals/EditLogModal';

Modal.setAppElement('#root');

const LogItem = ({ log }) => {
  const [modalEditLog, setModalEditLog] = useState(false);

  const { id, message, attention, date, tech } = log;

  return (
    <li className='logs-item'>
      <a
        href='#!'
        className='logs-link'
        onClick={() => {
          setModalEditLog(true);
        }}
        style={{ color: `${attention ? 'red' : 'rgb(58, 170, 26)'}` }}
      >
        {message}
      </a>
      <button className='logs-delete'>X</button>
      <p className='logs-details'>
        <span>
          ID: <strong>{id}</strong>
        </span>
        <span>
          Last updated by: <strong>{tech}</strong>
        </span>
        <span>{date}</span>
      </p>

      {/* Edit Log Modal */}
      <Modal
        isOpen={modalEditLog}
        onRequestClose={() => {
          setModalEditLog(false);
        }}
        style={modalStyle}
      >
        <EditLogModal log={log} />
      </Modal>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

const modalStyle = {
  content: {
    top: '15%',
    left: '10%',
    right: '10%',
    bottom: '15%',
    border: '1px solid #000',
  },
};

export default LogItem;
