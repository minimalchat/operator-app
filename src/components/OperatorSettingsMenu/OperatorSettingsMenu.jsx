/** OperatorSettingsMenu
  * Displays informaiton about the operator.
  * Might eventually hold a menu settings button?
*/

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './OperatorSettingsStyles.css';

const OperatorSettingsMenu = ({ avatar, operatorName }) => (
  <section className="SettingsMenu">
    <div className="Settings__box">
      <div className="Settings__avatar">
        <img
          alt={operatorName}
          src={avatar ? `https:${avatar}` : 'https://www.fillmurray.com/58/58'}
        />
      </div>
      <span className="Settings__operator">{operatorName}</span>
    </div>
  </section>
);

OperatorSettingsMenu.propTypes = {
  operatorName: PropTypes.string,
  avatar: PropTypes.string,
};

OperatorSettingsMenu.defaultProps = {
  operatorName: '',
  avatar: null,
};

const mapStateToProps = state => ({
  operatorName: state.config.operator,
  avatar: state.config.avatar,
});

export default connect(
  mapStateToProps,
)(OperatorSettingsMenu);
