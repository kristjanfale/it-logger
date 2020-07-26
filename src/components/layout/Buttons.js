import React, { useState } from 'react';
import Modal from 'react-modal';

import AddLogModal from '../modals/AddLogModal';
import AddTechModal from '../modals/AddTechModal';
import ListTechsModal from '../modals/ListTechsModal';

Modal.setAppElement('#root');

const Buttons = () => {
  const [modalAddLog, setModalAddLog] = useState(false);
  const [modalAddTech, setModalAddTech] = useState(false);
  const [modalListTechs, setModalListTechs] = useState(false);

  return (
    <div className='buttons'>
      <a
        className='add-log'
        onClick={() => {
          setModalAddLog(true);
        }}
      ></a>
      <a
        className='add-tech'
        onClick={() => {
          setModalAddTech(true);
        }}
      ></a>
      <a
        className='list-techs'
        onClick={() => {
          setModalListTechs(true);
        }}
      ></a>

      {/* MODALS */}
      {/* Add Log Modal */}
      <Modal
        isOpen={modalAddLog}
        onRequestClose={() => {
          setModalAddLog(false);
        }}
        style={modalStyle}
      >
        <AddLogModal />
      </Modal>

      {/* Add Tech Modal */}
      <Modal
        isOpen={modalAddTech}
        onRequestClose={() => {
          setModalAddTech(false);
        }}
        style={modalStyle}
      >
        <AddTechModal />
      </Modal>

      {/* List Techs Modal */}
      <Modal
        isOpen={modalListTechs}
        onRequestClose={() => {
          setModalListTechs(false);
        }}
        style={modalStyle}
      >
        <ListTechsModal />
      </Modal>
    </div>
  );
};

const modalStyle = {
  content: {
    // position: 'absolute',
    top: '10%',
    left: '10%',
    right: '10%',
    bottom: '10%',
    // border: '1px solid #ccc',
    // background: '#fff',
    // overflow: 'auto',
    // WebkitOverflowScrolling: 'touch',
    // borderRadius: '4px',
    // outline: 'none',
    // padding: '20px'
    // },
    // overlay: {
    //   position: 'fixed',
    //   top: 0,
    //   left: 0,
    //   right: 0,
    //   bottom: 0,
    //   backgroundColor: 'rgba(255, 255, 255, 0.75)'
  },
};

export default Buttons;
