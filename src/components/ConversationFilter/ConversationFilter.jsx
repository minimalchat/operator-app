import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import { Spinner } from '@blueprintjs/core';

import { openConversation } from '../../store/Chat/actions';

export class ConversationFilterComponent extends Component {
  static propTypes = {

  }

  constructor (props) {
    super(props);

  }

  render() {
    const { dispatch } = this.props;

    return null;
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const ConversationFilter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConversationFilterComponent);

export default ConversationFilter;
