import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import MessageMenuBar from '../MessageMenuBar/MessageMenuBar.jsx';
import MessageList from '../MessageList/MessageList.jsx';
import InputBar from '../InputBar/InputBar.jsx';
import './MessagePanel.css';

const MessagePanel = (props) => {
  const { activeId } = props;
  const renderView = () => {
    if (!activeId) {
      return (
        <div className="MessagePanel panel">
          <MessageList />
        </div>
      );
    }

    return (
      <div className="MessagePanel panel">
        <MessageMenuBar />
        <MessageList />
        <InputBar />
      </div>
    );
  };

  return renderView();
};

MessageList.propTypes = {
  activeId: PropTypes.string,
};


const mapStateToProps = state => ({
  activeId: state.chat.activeId,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessagePanel);
