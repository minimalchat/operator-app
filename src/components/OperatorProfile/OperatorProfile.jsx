import React, { Component } from 'react';
import { connect } from 'react-redux';

export class OperatorProfileComponent extends Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  render () {
    return (
      <div className="row profile" />
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

const OperatorProfile = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OperatorProfileComponent);

export default OperatorProfile;
