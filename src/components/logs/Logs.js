import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions';

import LogItem from './LogItem';

const Logs = ({ logs, loading, getLogs }) => {
  useEffect(() => {
    getLogs();
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

Logs.propTypes = {
  logs: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

// If u want to get anything from the App Level State and bring it in the Component, u bring it in as a prop
const mapStateToProps = (state) => ({
  // Get props from logReducer's initialState
  logs: state.logReducer.logs,
  loading: state.logReducer.loading,
});

export default connect(mapStateToProps, { getLogs })(Logs);
