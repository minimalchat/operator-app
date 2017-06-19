/**
  * @summary: Displays a single message in the Message List
*/

import React from 'react';
import PropTypes from 'prop-types';
import './Message.css';

const Message = (props) => {
  const msgClass = () => (
    props.author.indexOf('client') >= 0 ? 'Message__client' : 'Message__operator'
  );

  const { author } = props;
  const content = props.content.map((message, index) => <li key={index}>{message}</li>);

  let message = (
    <div>
      <ul>
        {content}
      </ul>
    </div>
  );

  return (
    <li className={msgClass()} style={{ clear: 'both' }}>
      {message}
    </li>
  );
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(
    PropTypes.string,
  ),
};


export default Message;

