/** OperatorClientMenu
  * Responsible for displaying all menu related things to an operator.
  * Filters chats by type (open, closed, all).
  * TODO: implement 'Assigned To Me' functionality (0.2)
*/

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './OperatorClientMenu.css';
import { setOperatorFilter } from '../../store/Chat';
import { toggleSettings } from '../../store/UI';

const OperatorClientMenu = (props) => {
  const { setFilter, operatorFilter, openChats } = props;

  const menuItems = [
    /* { name: 'Assigned to Me', id: 'assigned_to_me' }, */ // 0.2
    { name: 'All', id: 'all' },
    { name: `Open (${openChats})`, id: 'open' },
    { name: 'Closed', id: 'closed' },
  ];

  // toss the above array into a list with dynamic classes.
  const renderMenuItems = () => (
    menuItems.map((i) => {
      const classes = i.id === operatorFilter
        ? 'OperatorClient__selectedFilter'
        : 'OperatorClient__filter';

      return (
        <li key={i.id} className="OperatorClient__Menu__item">
          <button className={classes} type="button" onClick={() => setFilter(i.id)}>
            {i.name}
          </button>
        </li>
      );
    })
  );


  return (
    <ul className="OperatorClientMenu">
      {renderMenuItems()}
    </ul>
  );
};

OperatorClientMenu.propTypes = {
  setFilter: PropTypes.func.isRequired,
  operatorFilter: PropTypes.string,
  openChats: PropTypes.number,
};

OperatorClientMenu.defaultProps = {
  openChats: 0,
  operatorFilter: '',
};


const mapStateToProps = state => ({
  operatorFilter: state.chat.operatorFilter,
  openChats: Object
    .keys(state.chat.chats)
    .map(k => state.chat.chats[k])
    .filter(chat => chat.open)
    .length,
});

const mapDispatchToProps = dispatch => ({
  setFilter: (filterType) => {
    dispatch(setOperatorFilter(filterType));
    dispatch(toggleSettings(false));
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OperatorClientMenu);
