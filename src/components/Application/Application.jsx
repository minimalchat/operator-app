import React from 'react';
import { connect } from 'react-redux';

import OperatorPanel from '../OperatorPanel/OperatorPanel.jsx';
import ClientsPanel from '../ClientsPanel/ClientsPanel.jsx';
import MessagePanel from '../MessagePanel/MessagePanel.jsx';

import './Application.css';

export const ApplicationComponent = () => (
  <div>
    <OperatorPanel />
    <ClientsPanel />
    <MessagePanel />
  </div>
);

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

const Application = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApplicationComponent);

export default Application;
