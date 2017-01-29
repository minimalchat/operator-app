import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import ConversationList from '../Conversations/ConversationList.jsx';
import MessageList from '../Messages/MessageList.jsx';

export const ApplicationComponent = props => (
  <div className="pt-app">
    <ConversationList />
    <MessageList />
  </div>
);

ApplicationComponent.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const Application = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApplicationComponent);

export default Application;
