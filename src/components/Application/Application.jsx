import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import OperatorPanel from '../OperatorPanel/OperatorPanel.jsx';
import ClientsPanel from '../ClientsPanel/ClientsPanel.jsx';
import MessagePanel from '../MessagePanel/MessagePanel.jsx';

export class ApplicationComponent extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  };

  render () {
    return (
      <div className="pt-app">
        <OperatorPanel />
        <ClientsPanel />
        <MessagePanel />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const Application = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApplicationComponent);

export default Application;
