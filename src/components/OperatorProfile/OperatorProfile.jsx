import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export class OperatorProfileComponent extends Component {
  render () {
    return (
      <div className="row profile" />
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const OperatorProfile = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OperatorProfileComponent);

export default OperatorProfile;
