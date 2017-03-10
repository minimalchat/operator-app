import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MessageMenuBar.css'
// import PanelBar from '../PanelBar/PanelBar.jsx';

export class MessageMenuBarComponent extends Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  render () {
    return (
      <div className="MessageMenuBar">
        <div>Assign to other </div>
        <div>Mark as done </div>
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
