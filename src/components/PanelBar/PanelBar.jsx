import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export class PanelBarComponent extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  }

  constructor (props) {
    super(props);
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
  dispatch,
});

const PanelBar = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PanelBarComponent);

export default PanelBar;
