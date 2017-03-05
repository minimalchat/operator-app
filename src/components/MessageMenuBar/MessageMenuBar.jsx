import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import PanelBar from '../PanelBar/PanelBar.jsx';

export class MessageMenuBarComponent extends PanelBar {
  render () {
    return (
      <div className="row bar">
        <span>Menu</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const MessageMenuBar = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageMenuBarComponent);

export default MessageMenuBar;
