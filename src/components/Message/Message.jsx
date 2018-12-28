/**
  * @summary: Displays a single message in the Message List
*/

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './Message.css';

const Message = (props) => {
  let { content } = props;
  const { author, timestamp } = props;
  const msgClass = () => (
    author.indexOf('client') >= 0 ? 'Message__client' : 'Message__operator'
  );

  content = content.map((message, index) => <li key={`${author}`}>{message}</li>);

  let datetime = null;

  // Only show the timestamp on client messages
  if (author.indexOf('client') >= 0) {
    const momentTimestamp = moment(timestamp);

    // If the timestamp is less than 24 hours, show relative time, otherwise
    //  show Day of week, Time
    datetime = (
      <span className="Message__time">
        {
          momentTimestamp.isBefore(moment(), 'day')
            ? momentTimestamp.format('ddd, h:mma')
            : momentTimestamp.fromNow()
        }
      </span>
    );
  }

  let message = (
    <div>
      <ul>
        {content}
      </ul>
      {datetime}
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

Message.defaultProps = {
  content: [],
};


export default Message;

