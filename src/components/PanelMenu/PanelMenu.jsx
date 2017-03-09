import React, { Component } from 'react';
import { connect } from 'react-redux';

// DEPRECATED: Composition over Inheritence
export class PanelMenuComponent extends Component {
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

const PanelMenu = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PanelMenuComponent);

export default PanelMenu;
