import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { NonIdealState } from '@blueprintjs/core';

export const MessageListComponent = (props) => {
  let desc = <span>Womps! But we have so much to say!</span>;

  return (
    <div id="messages">
      <NonIdealState
        title="No Conversations"
        description={desc}
        visual="chat"
      />
    </div>
  );
};

MessageListComponent.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const MessageList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageListComponent);

export default MessageList;
