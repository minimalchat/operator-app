import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BrandLogo from '../SVG/BrandLogo.jsx';
import Button from '../Button/Button.jsx';
import { updateSettings } from '../../store/Config';
import { toggleWelcomeScreen } from '../../store/UI';

import './WelcomeScreen.css';

class WelcomeScreen extends Component {
  static propTypes = {
    changeSettings: PropTypes.func.isRequired,
  }

  state = {
    connString: '',
  }

  connect = () => {
    const { changeSettings } = this.props;
    const { connString } = this.state;

    changeSettings({ apiServer: connString });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render () {
    return (
      <div className="WelcomeScreen screen">
        <header className="WelcomeScreen__header">
          <BrandLogo />
          <span className="WelcomeScreen__appname">Operator</span>
        </header>
        <section className="WelcomeScreen__body">
          <form onSubmit={this.connect} className="WelcomeScreen__wrapper">
            <input
              type="text"
              name="connString"
              onChange={this.handleChange}
              value={this.state.connString}
              placeholder="https://api.server.com:1337"
            />
            <Button variant="send" type="submit">Connect</Button>
          </form>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  changeSettings: newSettings => dispatch(updateSettings(newSettings)) &&
    dispatch(toggleWelcomeScreen(false)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WelcomeScreen);
