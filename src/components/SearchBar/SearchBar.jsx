import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

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

export default SearchBar;
