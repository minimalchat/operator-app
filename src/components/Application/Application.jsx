import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import OperatorPanel from '../OperatorPanel/OperatorPanel.jsx';
import ClientsPanel from '../ClientsPanel/ClientsPanel.jsx';
import MessagePanel from '../MessagePanel/MessagePanel.jsx';

import { setApiServer, setOperator } from '../../store/Chat/actions.js';

import './Application.css';

export const ApplicationComponent = (props) => {
  if (!props.hasOwnProperty('apiServer')) {
    console.warn('WARNING: Missing apiServer (Have you created a config.json?)', props.apiServer);
  }

  return (
    <div className="App">
      <OperatorPanel />
      <ClientsPanel />
      <MessagePanel />
    </div>
  );
};

ApplicationComponent.propTypes = {
  apiServer: PropTypes.string,
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

const Application = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApplicationComponent);

export default Application;
