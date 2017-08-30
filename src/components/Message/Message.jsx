/**
  * @summary: Displays a single message in the Message List
*/

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './Message.css';

const Message = (props) => {
  const msgClass = () => (
    props.author.indexOf('client') >= 0 ? 'Message__client' : 'Message__operator'
  );

  const { author, timestamp } = props;
  const content = props.content.map((message, index) => <li key={index}>{message}</li>);

  console.log('MESSAGE TIME', timestamp);

  let message = (
    <div>
      <ul>
        {content}
      </ul>
      {author.indexOf('client') >= 0 ?
        (
          <span className="Message__time">
            {moment(new Date(timestamp)).format('ddd, h:mma')}
          </span>
        ) : null
      }
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
  timestamp: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(
    PropTypes.string,
  ),
};


export default Message;

