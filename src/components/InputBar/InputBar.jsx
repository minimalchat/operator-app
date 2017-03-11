import React, { Component } from 'react';
import { connect } from 'react-redux';
import './InputBar.css';
import Button from '../Button/Button.jsx';
// import PanelBar from '../PanelBar/PanelBar.jsx';

export class InputBarComponent extends Component {
  render () {
    return (
      <div className="InputBar">
        <textarea placeholder="text here, dummy" />
        <Button variant="send" onClick={() => {}}>Send</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

const InputBar = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputBarComponent);

export default InputBar;
