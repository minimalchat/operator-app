import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Panel from '../Panel/Panel.jsx';
import MessageMenuBar from '../MessageMenuBar/MessageMenuBar.jsx';
import MessageList from '../MessageList/MessageList.jsx';
import InputBar from '../InputBar/InputBar.jsx';

import './MessagePanel.css';

const MessagePanel = () => (
  <div id="MessagePanel" className="panel">
    {/* <MessageMenuBar /> */} {/* TODO: Add back in for 0.2 */}
    <MessageList />
    <InputBar />
  </div>
);

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessagePanel);
