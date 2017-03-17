import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import './Settings.css';

/**
 * @summary: responsible for handling the display of messages.
 */
const Settings = (props) => {
  return (
    <div className="Settings">Im the settings yah </div>
  );
};


Settings.propTypes = {
};


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(Settings);
