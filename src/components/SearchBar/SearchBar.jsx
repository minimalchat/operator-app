import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchBar.css'
// import PanelBar from '../PanelBar/PanelBar.jsx';

export class SearchBarComponent extends Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  render () {
    return (
      <div className="SearchBar">
        <input type="text" placeholder="Search Chats..."/>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

const SearchBar = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBarComponent);

export default SearchBar;
