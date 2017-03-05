import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// import ConversationPane from '../ConversationPane/ConversationPane.jsx';
// import MessagePane from '../MessagePane/MessagePane.jsx';

export class PanelComponent extends Component {
  static propTypes = {
    children: PropTypes.node,
    dispatch: PropTypes.func,
  }

  constructor (props) {
    super(props);

    this.state = {};
  }

  // getChildContext () {
  //   return { store: this.context.store };
  // }

  render () {
    const { children } = this.props;

    return (
      <div className="panel">
        {children}
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const Panel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PanelComponent);

export default Panel;
