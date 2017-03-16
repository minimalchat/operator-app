import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ClientCard from '../ClientCard/ClientCard.jsx';
import './ClientList.css';


const ClientList = (props) => {
  const { operatorFilter, chats } = props;

  // filters by operator filter + maps to html
  function getChats () {
    const filtered = chats.filter((chat) => {
      if (operatorFilter === 'open') return chat.open;
      if (operatorFilter === 'closed') return !chat.open;
      return chat;
    });

    return filtered.map(chat => (
      <ClientCard key={chat.id} chatId={chat.id}>
        {`${chat.client.first_name} ${chat.client.last_name}`}
      </ClientCard>
    ));
  }


  return <ul className="ClientList__list">{ getChats() }</ul>;
};

const mapStateToProps = state => ({
  operatorFilter: state.chat.operatorFilter,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientList);


ClientList.propTypes = {
  chats: PropTypes.array.isRequired,
  operatorFilter: PropTypes.string.isRequired,
};
