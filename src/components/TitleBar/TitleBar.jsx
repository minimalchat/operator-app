import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import PanelBar from '../PanelBar/PanelBar.jsx';

export class TitleBarComponent extends PanelBar {
  constructor (props) {
    super(props);

    this.state = {
      title: 'Operator',
    };
  }

  render () {
    const { title } = this.state;

    // console.log('STATE', this.props.state);
    // console.log('CONTEXT', this.context);

    return (
      <div className="row bar">
        <span>{title}</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const TitleBar = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TitleBarComponent);

export default TitleBar;
