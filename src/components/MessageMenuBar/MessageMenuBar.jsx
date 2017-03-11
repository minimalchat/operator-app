import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MessageMenuBar.css';
import Button from '../Button/Button.jsx';
// import PanelBar from '../PanelBar/PanelBar.jsx';

export class MessageMenuBarComponent extends Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  render () {
    return (
      <div className="MessageMenuBar">
        <Button onClick={() => {}}>Assign to other</Button>
        <Button onClick={() => {}}>Mark as done</Button>
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
