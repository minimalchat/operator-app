import React, { Component } from 'react';
import { connect } from 'react-redux';

// import PanelMenu from '../PanelMenu/PanelMenu.jsx';

export class OperatorSettingsMenuComponent extends Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

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

});

const OperatorSettingsMenu = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OperatorSettingsMenuComponent);

export default OperatorSettingsMenu;
