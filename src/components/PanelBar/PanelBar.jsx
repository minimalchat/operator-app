import React, { Component } from 'react';
import { connect } from 'react-redux';

// DEPRECATED: Composition over Inheritence
export class PanelBarComponent extends Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  render () {
    return (
      <div className="row" />
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

const PanelBar = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PanelBarComponent);

export default PanelBar;
