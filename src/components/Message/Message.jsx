/**
  * @summary: Displays a single message in the Message List
*/

import React, { PropTypes } from 'react';
import './Message.css';

const Message = (props) => {
  const msgClass = () => (
    props.type === 'operator' ? 'Message__operator' : 'Message__client'
  );

  return <div className={msgClass()}>{props.children}</div>;
};

Message.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};


export default Message;

