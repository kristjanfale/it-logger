import React, { useState, useEffect } from 'react';

import TechItem from '../techs/TechItem';

const ListTechsModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  const getTechs = async () => {
    setLoading(true);

    const res = await fetch('http://localhost:5000/techs');
    const data = await res.json();
    console.log(data);

    setTechs(data);
    setLoading(false);
  };

  if (loading) {
    return <h2 className='loading'>Loading...</h2>;
  }

  return (
    <div className='modal'>
      <h2 className='modal-title'>Technicians</h2>

      <ul className='tech-list'>
        {techs.length === 0 ? (
          <p>No techs to show...</p>
        ) : (
          techs.map((tech) => <TechItem key={tech.id} tech={tech} />)
        )}
      </ul>
    </div>
  );
};

export default ListTechsModal;
