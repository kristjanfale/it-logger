import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLogs } from '../../slices/logSlice';

import LogItem from './LogItem';

const Logs = () => {
  // useDispatch is for dispatching actions
  const dispatch = useDispatch();

  // The function below is called a selector and allows us to select a value from
  // the state. Selectors can also be defined inline where they're used instead of
  // in the slice file. For example: `useSelector((state) => state.counter.value)`
  const log = useSelector((state) => state.log);
  const { logs, loading } = log;

  useEffect(() => {
    dispatch(fetchLogs());
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
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
