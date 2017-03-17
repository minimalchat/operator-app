import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import SearchBar from '../SearchBar/SearchBar.jsx';
import ClientList from '../ClientList/ClientList.jsx';
import './ClientsPanel.css';

// TODO: write a test for this
function filterChats (chats = [], query = '') {
  const lowerQuery = query.trim().toLowerCase();

  return chats.filter(chat => (
    `${chat.client.first_name.toLowerCase()} ${chat.client.last_name.toLowerCase()}`.includes(lowerQuery)
  ));
}

export class ClientsPanelComponent extends Component {
  state = { query: '' }

  onQueryChange = (event) => {
    const query = event.target.value;
    this.setState({ query });
  }

  render () {
    const { query } = this.state;

    return (
      <div className="ClientsPanel">
        <SearchBar query={query} onQueryChange={this.onQueryChange} />
        <ClientList query={query} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({

});

const ClientsPanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientsPanelComponent);

export default ClientsPanel;
