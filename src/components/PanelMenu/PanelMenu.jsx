import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export class PanelMenuComponent extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
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
  dispatch,
});

const PanelMenu = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PanelMenuComponent);

export default PanelMenu;
