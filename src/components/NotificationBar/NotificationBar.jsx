import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './NotificationBar.css';

const NotificationBar = (props) => {
  const {
    notification,
    notificationIcon,
    notificationColour,
  } = props;

  const classes = [
    'NotificationBar',
    `NotificationBar--${notificationColour}`,
    notification !== '' ? 'NotificationBar--active' : '',
  ];

  return (
    <section className={classes.join(' ')}>
      <div className="NotificationBar__status">
        <span className="NotificationBar__icon ss-icon">
          {notificationIcon}
        </span>
        {notification}
      </div>
      {/* <span className="NotificationBar__close ss-icon">Close</span> */}
    </section>
  );
};

NotificationBar.defaultProps = {
  notificationIcon: 'info',
};

NotificationBar.propTypes = {
  notification: PropTypes.string.isRequired,
  notificationIcon: PropTypes.string,
  notificationColour: PropTypes.string,
};

const mapStateToProps = state => ({
  notification: state.ui.notification,
  notificationIcon: state.ui.notificationIcon,
  notificationColour: state.ui.notificationColour,
});

export default connect(mapStateToProps, null)(NotificationBar);
