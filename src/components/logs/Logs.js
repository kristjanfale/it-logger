import React, { useState, useEffect } from 'react';

import LogItem from './LogItem';

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  const getLogs = async () => {
    setLoading(true);

    const res = await fetch('http://localhost:5000/logs');
    const data = await res.json();
    console.log(data);

    setLogs(data);
    setLoading(false);
  };

  if (loading) {
    return <h2 className='loading'>Loading...</h2>;
  }

  return (
    <div className='logs'>
      <h2 className='logs-title'>System Logs</h2>
      <ul className='logs-list'>
        {logs.length === 0 ? (
          <p>No logs to show...</p>
        ) : (
          logs.map((log) => <LogItem key={log.id} log={log} />)
        )}
      </ul>
    </div>
  );
};

export default Logs;
