import React, { Component } from 'react';
import { connect } from 'react-redux';

import './TitleBar.css';

export class TitleBarComponent extends Component {
  constructor (props) {
    super(props);

    this.state = {
      title: 'Operator',
    };
  }

  render () {
    const { title } = this.state;

    return (
      <div id="title" className="row bar">
        <span>{title}</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

const TitleBar = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TitleBarComponent);

export default TitleBar;
