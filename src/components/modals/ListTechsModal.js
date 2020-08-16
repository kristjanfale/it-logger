import React from 'react';
import { useSelector } from 'react-redux';

import TechItem from '../techs/TechItem';

const ListTechsModal = () => {
  // React components can read data from the Redux store using the useSelector hook
  const tech = useSelector((state) => state.tech);
  const { techs } = tech;

  return (
    <div className='modal'>
      <h2 className='modal-title'>Technicians</h2>

      <ul className='tech-list'>
        {techs.length === 0 ? (
          <h2>No techs to show...</h2>
        ) : (
          techs.map((tech) => <TechItem key={tech.id} tech={tech} />)
        )}
      </ul>
    </div>
  );
};

export default ListTechsModal;
