import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  Popover,
  Tag,
  Menu,
  MenuDivider,
  MenuItem,
  InputGroup,
  Button,

  Intent,
  Position,
} from '@blueprintjs/core';

const apiURI = 'http://localhost:8000';

export class ConversationListComponent extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  }

  componentDidMount () { }

  render () {
    const menu = (
      <Menu>
        <MenuItem
          iconName="user"
          text="Assigned to Me"
          label={<Tag className="pt-minimal pt-round">0</Tag>}
          intent={Intent.SUCCESS}
        />
        <MenuDivider />
        <MenuItem
          text="Unassigned"
          label={<Tag className="pt-minimal pt-round">0</Tag>}
        />
        <MenuDivider />
        <MenuItem
          text="Open"
          disabled
          label={<Tag className="pt-minimal pt-round">0</Tag>}
        />
        <MenuItem
          text="Pending"
          label={<Tag className="pt-minimal pt-round">0</Tag>}
        />
        <MenuItem
          text="Closed"
          label={<Tag className="pt-minimal pt-round">0</Tag>}
        />
        <MenuDivider />
        <MenuItem
          text="All"
          label={<Tag className="pt-minimal pt-round">0</Tag>}
        />
        <MenuDivider />
        <MenuItem
          iconName="filter-list"
          text="Custom Filter..."
          label={<span>Ctrl+Shift+F</span>}
        />
      </Menu>
    );

    return (
      <div id="conversations">
        <nav className="pt-navbar pt-minimal">
          <div className="pt-navbar-group pt-align-left">
            <InputGroup
              leftIconName="search"
              className="pt-minimal"
              placeholder="Search Clients &hellip;"
            />
          </div>
          <div className="pt-navbar-group pt-align-right">
            <Popover content={menu} position={Position.BOTTOM_RIGHT}>
              <Button
                className="pt-minimal pt-ui-text"
                rightIconName="chevron-down"
                text="Open"
              />
            </Popover>
          </div>
        </nav>
        <ul id="conversation-list">
          <li className="pt-card pt-elevation-1" />
          <li className="pt-card pt-elevation-1" />
          <li className="pt-card pt-elevation-1" />
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const ConversationList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConversationListComponent);

export default ConversationList;
