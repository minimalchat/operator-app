import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './ClientCard.css'

const ClientCard = props => (
  <li className="ClientCard">
    {props.children}
  </li>
)

export default ClientCard