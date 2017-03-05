import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import PanelBar from '../PanelBar/PanelBar.jsx';

export class InputBarComponent extends PanelBar {
  render () {
    return (
      <div className="row bar">
        <textarea />
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const InputBar = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputBarComponent);

export default InputBar;
