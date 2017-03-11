import React, { Component } from 'react';
import { connect } from 'react-redux';
import './InputBar.css'
// import PanelBar from '../PanelBar/PanelBar.jsx';

export class InputBarComponent extends Component {
  render () {
    return (
      <div className="InputBar">
        <textarea placeholder="text here, dummy" />
        {/*TODO: Convert this to a component*/}
        <button className="InputBar_send">send</button>
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
