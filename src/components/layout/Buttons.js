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
      <div
        className='add-log'
        onClick={() => {
          setModalAddLog(true);
        }}
      ></div>
      <div
        className='add-tech'
        onClick={() => {
          setModalAddTech(true);
        }}
      ></div>
      <div
        className='list-techs'
        onClick={() => {
          setModalListTechs(true);
        }}
      ></div>

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
    top: '15%',
    left: '10%',
    right: '10%',
    bottom: '15%',
    border: '0.1rem solid #000',
  },
};

export default Buttons;
