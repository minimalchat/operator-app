import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import { Spinner } from '@blueprintjs/core';

import { openConversation } from '../../store/Chat/actions';

export class ConversationCardComponent extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    client: PropTypes.objectOf(PropTypes.string),
    chat: PropTypes.string,
    tabIndex: PropTypes.number,
    updateTime: PropTypes.string,
    key: PropTypes.string,
  }

  constructor (props) {
    super(props);

    this.state = {
      client: props.client || false,
      updateTime: props.updateTime,
    };
  }

  render() {
    const { dispatch, chat, tabIndex } = this.props;
    let data = <Spinner className="pt-small" />;

    if (this.state.client) {
      let { name } = this.state.client;

      let relativeTime = moment(this.state.updateTime, 'YYYY-MM-DDTHH:mm:ss.SSS').fromNow();

      data = (
        <button
          tabIndex={tabIndex}
          onClick={() => {
            dispatch(openConversation(chat));
          }}
        >
          <h4>{name}</h4>
          <p>{relativeTime}</p>
        </button>
      );
    }

    return (
      <li id={chat} className="pt-card pt-elevation-1">
        {data}
      </li>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const ConversationCard = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConversationCardComponent);

export default ConversationCard;
