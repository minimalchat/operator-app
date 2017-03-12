import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Panel from '../Panel/Panel.jsx';
import MessageMenuBar from '../MessageMenuBar/MessageMenuBar.jsx';
import MessageList from '../MessageList/MessageList.jsx';
import InputBar from '../InputBar/InputBar.jsx';

import './MessagePanel.css';

const MessagePanel = () => (
  <div id="MessagePanel" className="panel">
    <div className="MessagePanel__container">
      <MessageMenuBar />
      <MessageList />
    </div>
    <div className="bottom container">
      <InputBar />
    </div>
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

