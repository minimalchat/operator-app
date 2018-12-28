import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

const SearchBar = (props) => {
  const { query, onQueryChange } = props;

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search Chats..."
        value={query}
        onChange={onQueryChange}
      />
    </div>
  );
};

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  onQueryChange: PropTypes.func.isRequired,
};

export default SearchBar;
