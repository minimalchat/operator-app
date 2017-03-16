import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './OperatorClientMenu.css';
import { setOperatorFilter } from '../../store/Chat/actions';

const OperatorClientMenu = (props) => {
  const { setFilter, operatorFilter } = props;

  const menuItems = [
    { name: 'All', id: 'all' },
    { name: 'Assigned to Me', id: 'assigned_to_me' },
    { name: 'Open', id: 'open' },
    { name: 'Closed', id: 'closed' },
  ];


  const renderMenuItems = () => (
    menuItems.map((i) => {
      const classes = i.id === operatorFilter
                    ? 'OperatorClient__selectedFilter'
                    : 'OperatorClient__filter';


      return (
        <li key={i.id} className="OperatorClient__Menu__item">
          <button className={classes} onClick={() => setFilter(i.id)}> {i.name} </button>
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


const mapStateToProps = state => ({
  operatorFilter: state.chat.operatorFilter,
});

const mapDispatchToProps = dispatch => ({
  setFilter: filterType => dispatch(setOperatorFilter(filterType)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OperatorClientMenu);


OperatorClientMenu.propTypes = {
  setFilter: PropTypes.func.isRequired,
  operatorFilter: PropTypes.string,
};
