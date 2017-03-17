import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ClientCard from '../ClientCard/ClientCard.jsx';
import './ClientList.css';


// Helpers | TODO: Write tests, maybe move to helpers file?
function filterByQuery (chats = [], query = '') {
  if (query === '') return chats;
  const lowerQuery = query.trim().toLowerCase();

  return chats.filter(chat => (
    `${chat.client.first_name.toLowerCase()} ${chat.client.last_name.toLowerCase()}`.includes(lowerQuery)
  ));
}


// Component
const ClientList = (props) => {
  const { operatorFilter, chats, query } = props;

  // filters chats (by operator filter or searchbar) => maps to html
  function getChats () {
    const filteredChats = filterByQuery(chats, query).filter((chat) => {
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

  return <ul className="ClientList__list">{ getChats() }</ul>;
};

const mapStateToProps = state => ({
  operatorFilter: state.chat.operatorFilter,
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


ClientList.propTypes = {
  chats: PropTypes.array.isRequired,
  operatorFilter: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
};
