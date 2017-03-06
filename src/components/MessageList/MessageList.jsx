import React, { Component } from 'react';
import { connect } from 'react-redux';

export class MessageListComponent extends Component {
  constructor (props) {
    super(props);

    this.state = {};
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

});

const MessageList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageListComponent);

export default MessageList;
