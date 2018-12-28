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

  parseConnectionString = (str) => {
    let accessId;
    let accessToken;
    let apiServer;

    const [proto, protolessStr] = str.split('://');

    if (protolessStr.lastIndexOf('@') > -1) {
      // Pull the access_id and access_token's out from the string
      [accessId, accessToken] = protolessStr.slice(0, protolessStr.lastIndexOf('@')).split(':');

      // Pull the api server host from the string (Note: we dont care if the
      //  port is left in there or not, it will work either way)
      apiServer = protolessStr.slice(protolessStr.lastIndexOf('@') + 1);
    } else {
      apiServer = protolessStr;
    }

    return {
      proto,
      accessId,
      accessToken,
      apiServer,
    };
  }

  connect = () => {
    const { changeSettings } = this.props;
    const { connString } = this.state;

    // TODO: Test connection by pulling the operator information
    const {
      proto,
      accessId,
      accessToken,
      apiServer,
    } = this.parseConnectionString(connString);

    // loadOperator()

    changeSettings({ apiServer: `${proto}://${apiServer}` });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render () {
    const { connString } = this.state;

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
              value={connString}
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
  changeSettings: newSettings => dispatch(updateSettings(newSettings))
    && dispatch(toggleWelcomeScreen(false)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WelcomeScreen);
