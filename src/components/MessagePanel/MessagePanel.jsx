import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Panel from '../Panel/Panel.jsx';
import MessageMenuBar from '../MessageMenuBar/MessageMenuBar.jsx';
import MessageList from '../MessageList/MessageList.jsx';
import InputBar from '../InputBar/InputBar.jsx';

export class MessagePanelComponent extends Panel {
  render () {
    return (
      <div className="panel">
        <div className="top container">
          <MessageMenuBar />
          <MessageList />
        </div>
        <div className="bottom container">
          <InputBar />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const MessagePanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessagePanelComponent);

export default MessagePanel;
