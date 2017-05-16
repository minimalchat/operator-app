import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadChats } from '../../store/Chat';
import ClientCard from '../ClientCard/ClientCard.jsx';
import './ClientList.css';

class ClientList extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
    chats: PropTypes.array.isRequired,
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

    return filteredChats.map(chat => (
      <ClientCard key={chat.id} chat={chat} chatId={chat.id}>
        {`${chat.client.first_name} ${chat.client.last_name}`}
      </ClientCard>
    ));
  }

  filterByQuery = () => {
    const { chats, query } = this.props;

    if (query === '') return chats;

    const lowerQuery = query.trim().toLowerCase();

    return chats.filter(chat => (
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
  chats: state.chat.chats.sort((curr, next) => (
    new Date(next.updated_time) - new Date(curr.updated_time)
  )),
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientList);
