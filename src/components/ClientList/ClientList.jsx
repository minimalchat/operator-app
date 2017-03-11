import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const ClientList = (props) => {
  const chatItems = props.chats.map(chat => (
    <li key={chat.id}>{`${chat.client.first_name} ${chat.client.last_name}`}</li>
  ));

  return (
    <div className="row">
      <ul className="menu">{chatItems}</ul>
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
