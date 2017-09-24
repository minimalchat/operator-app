import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ClientCard from '../ClientCard/ClientCard.jsx';
import { loadChats } from '../../store/Chat';
import './ClientList.css';

class ClientList extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
    chats: PropTypes.object.isRequired,
    operatorFilter: PropTypes.string.isRequired,
    query: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  componentWillMount () {
    if (this.props.config.apiServer) {
      loadChats(this.props.dispatch, this.props.config);
    }
  }

  getChats = () => {
    const { operatorFilter } = this.props;

    const filteredChats = this.filterByQuery().filter((chat) => {
      if (operatorFilter === 'open') return chat.open;
      if (operatorFilter === 'closed') return !chat.open;
      return chat;
    });

    return filteredChats.map(chat => {
      if (chat.client == null) return null // avoids an async issue where chat client isn't avail. Weird bug.
      return (
        <ClientCard key={chat.id} chat={chat} chatId={chat.id}>
          {`${chat.client.first_name} ${chat.client.last_name}`}
        </ClientCard>
      )
    });
  }

  filterByQuery = () => {
    const { chats, query } = this.props;
    let filteredChats = Object.keys(chats)
      .map(k => Object.assign({}, chats[k], {
        id: k,
      }))
      .sort((curr, next) => (
        new Date(next.updated_time) - new Date(curr.updated_time)
      ));

    if (query === '') return filteredChats;

    const lowerQuery = query.trim().toLowerCase();

    return filteredChats
      .filter(chat => (
        `${chat.client.first_name.toLowerCase()} ${chat.client.last_name.toLowerCase()}`.includes(lowerQuery)
      ));
  }

  render () {
    return (
      <ul className="ClientList__list">{ this.getChats() }</ul>
    );
  }
}

const mapStateToProps = state => ({
  operatorFilter: state.chat.operatorFilter,
  config: state.chat.config,
  chats: state.chat.chats,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientList);
