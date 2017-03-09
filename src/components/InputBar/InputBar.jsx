import React, { Component } from 'react';
import { connect } from 'react-redux';

// import PanelBar from '../PanelBar/PanelBar.jsx';

export class InputBarComponent extends Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  render () {
    return (
      <div className="row">
        <textarea />
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
