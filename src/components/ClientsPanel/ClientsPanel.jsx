/**
 * This panel displays a list of chat sessions.
 * TODO: receives data from chat reducer and iterates over it.
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from '../SearchBar/SearchBar.jsx';
import ClientList from '../ClientList/ClientList.jsx';

import './ClientsPanel.css';

export class ClientsPanelComponent extends Component {
  render () {
    let {chats} = this.props

    return (
      <div id="clients-panel" className="panel">
        <div className="top container">
          <SearchBar />
          <ClientList/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  chats: state.chat.chats,
})

const mapDispatchToProps = dispatch => ({

});

const ClientsPanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientsPanelComponent);

export default ClientsPanel;
