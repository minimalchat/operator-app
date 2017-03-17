import React, { Component } from 'react';

import SearchBar from '../SearchBar/SearchBar.jsx';
import ClientList from '../ClientList/ClientList.jsx';
import './ClientsPanel.css';


class ClientsPanel extends Component {
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

export default ClientsPanel;
