import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  Popover,
  Tag,
  Menu,
  MenuDivider,
  MenuItem,
  InputGroup,
  Button
} from '@blueprintjs/core';

import {
  Intent,
  Position
} from '@blueprintjs/core';

export class ConversationList extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  }

  constructor (props) {
    super(props);

  }

  render() {
    const menu = (
      <Menu>
        <MenuItem
          iconName="user"
          text="Assigned to Me"
          label={<Tag className="pt-minimal pt-round">0</Tag>}
          intent={Intent.SUCCESS} />
        <MenuDivider />
        <MenuItem
          text="Unassigned"
          label={<Tag className="pt-minimal pt-round">0</Tag>} />
        <MenuDivider />
        <MenuItem
          text="Open"
          disabled={true}
          label={<Tag className="pt-minimal pt-round">0</Tag>} />
        <MenuItem
          text="Pending"
          label={<Tag className="pt-minimal pt-round">0</Tag>} />
        <MenuItem
          text="Closed"
          label={<Tag className="pt-minimal pt-round">0</Tag>} />
        <MenuDivider />
        <MenuItem
          text="All"
          label={<Tag className="pt-minimal pt-round">0</Tag>} />
        <MenuDivider />
        <MenuItem
          iconName="filter-list"
          text="Custom Filter..."
          label={<span>Ctrl+Shift+F</span>} />
      </Menu>
    )

    return (
      <div id="conversations">
        <nav className="pt-navbar pt-minimal">
          <div className="pt-navbar-group pt-align-left">
            <InputGroup
              leftIconName="search"
              className="pt-minimal"
              placeholder="Search Clients &hellip;" />
          </div>
          <div className="pt-navbar-group pt-align-right">
            <Popover content={menu} position={Position.BOTTOM_RIGHT}>
              <Button
                className="pt-minimal pt-ui-text"
                rightIconName="chevron-down"
                text="Open" />
            </Popover>
          </div>
        </nav>
        <ul id="conversation-list">
          <li className="pt-card pt-elevation-1"></li>
          <li className="pt-card pt-elevation-1"></li>
          <li className="pt-card pt-elevation-1"></li>
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({ }),
  dispatch => ({ dispatch }),
)(ConversationList);
