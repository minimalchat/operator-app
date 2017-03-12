import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './SearchBar.css';
// import PanelBar from '../PanelBar/PanelBar.jsx';

const SearchBar = props => (
  <div className="SearchBar">
    <input
      type="text"
      placeholder="Search Chats..."
      value={props.query}
      onChange={props.onQueryChange}
    />
  </div>
);

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  onQueryChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);
