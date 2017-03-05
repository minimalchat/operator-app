import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import PanelMenu from '../PanelMenu/PanelMenu.jsx';

export class OperatorClientMenuComponent extends PanelMenu {
  render () {
    return (
      <div className="row">
        <ul className="menu" />
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const OperatorClientMenu = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OperatorClientMenuComponent);

export default OperatorClientMenu;
