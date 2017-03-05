import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Panel from '../Panel/Panel.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import ClientList from '../ClientList/ClientList.jsx';

export class ClientsPanelComponent extends Panel {
  render () {
    return (
      <div className="panel">
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
  dispatch,
});

const ClientsPanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientsPanelComponent);

export default ClientsPanel;
