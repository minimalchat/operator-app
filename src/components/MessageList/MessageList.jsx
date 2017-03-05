import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export class MessageListComponent extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  }

  render () {
    return (
      <div className="row">
        <ul className="menu" />
      </div>
    );
  }
}

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
