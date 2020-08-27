import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLogs } from '../../slices/logSlice';

import LogItem from './LogItem';

const Logs = () => {
  // useDispatch is for dispatching actions
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLogs());
    // eslint-disable-next-line
  }, []);

  // The function below is called a selector and allows us to select a value from the state.
  // For example: `useSelector((state) => state.counter.value)`
  const log = useSelector((state) => state.log);
  const { logs, filtered, loading } = log;

  if (loading || logs === null) {
    return <h2 className='loading'>Loading...</h2>;
  }

  // Sort logs in reverse chronological order by datetime
  const orderedLogs = logs.slice().sort((a, b) => b.date.localeCompare(a.date));

  const orderedFiltered = filtered
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className='logs'>
      <h2 className='logs-title'>System Logs</h2>
      <ul className='logs-list'>
        {orderedLogs.length === 0 ? (
          <h1>No logs to show...</h1>
        ) : filtered === [] || filtered.length === 0 ? (
          orderedLogs.map((log) => <LogItem key={log.id} log={log} />)
        ) : (
          orderedFiltered.map((log) => <LogItem key={log.id} log={log} />)
        )}
      </ul>
    </div>
  );
};

export default Logs;
