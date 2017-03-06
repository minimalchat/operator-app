import React, { Component } from 'react';
import { connect } from 'react-redux';

// import PanelBar from '../PanelBar/PanelBar.jsx';

export class MessageMenuBarComponent extends Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

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

});

const MessageMenuBar = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageMenuBarComponent);

export default MessageMenuBar;
