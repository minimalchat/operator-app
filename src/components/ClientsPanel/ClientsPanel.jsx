import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Panel from '../Panel/Panel.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import ClientList from '../ClientList/ClientList.jsx';

import './ClientsPanel.css';

export class ClientsPanelComponent extends Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  render () {
    return (
      <div id="clients-panel" className="panel">
        <div className="top container">
          <SearchBar />
          <ClientList />
        </div>
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
