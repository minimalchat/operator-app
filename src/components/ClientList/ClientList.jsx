import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ClientCard from '../ClientCard/ClientCard.jsx'
import './ClientList.css'

const ClientList = (props) => {
  const chatItems = props.chats.map(chat => (
    <ClientCard
      key={chat.id}
      chatId={chat.id}
    >{`${chat.client.first_name} ${chat.client.last_name}`}</ClientCard>
  ));
  return (
    <div className="ClientList row">
      <ul className="ClientList__list">{chatItems}</ul>
    </div>
  );
};

ClientList.propTypes = {
  chats: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientList);
