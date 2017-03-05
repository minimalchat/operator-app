import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import PanelBar from '../PanelBar/PanelBar.jsx';

export class SearchBarComponent extends PanelBar {
  render () {
    return (
      <div className="row bar">
        <span>Search</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const SearchBar = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBarComponent);

export default SearchBar;
