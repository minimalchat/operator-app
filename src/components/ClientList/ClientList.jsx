import React from 'react';
import { connect } from 'react-redux';

const ClientList = (props) => {
  console.log(props)

  return(
    <div className="row">
      <ul className="menu">
      {props.chats.map(chat => {
         console.log(chat)
         return <li key={chat.id}>{chat.client.first_name}</li>
       })}
      </ul>
    </div>
  )
}


export default connect(
  (state) => ({
    chats: state.chat.chats
  }),
  (dispatch) => ({
  }),
)(ClientList)


