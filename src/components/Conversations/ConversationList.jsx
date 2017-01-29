import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// I dislike this imports name so hard :E
import 'whatwg-fetch';

// I also hate this
import {
  Popover,
  Tag,
  Menu,
  MenuDivider,
  MenuItem,
  InputGroup,
  Button,
  NonIdealState,

  Intent,
  Position,
} from '@blueprintjs/core';

import ConversationCard from '../ConversationCard/ConversationCard.jsx';

const API_URI = 'http://localhost:8000';

export class ConversationListComponent extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  }

  constructor (props) {
    super(props);

    this.state = {
      chats: [],
    };
  }

  componentDidMount () {
    const route = `${API_URI}/api/chats`;

    console.log(`XHR ${route}`);

    fetch(route)
      .then(this.apiWillMount)
      .then(this.apiParse)
      .then(this.apiDidMount.bind(this))
      .catch(this.apiDidNotMount);
  }

  apiWillMount (response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    let error = new Error(response.statusText);
    error.response = response;

    throw error;
  }

  apiParse (response) {
    return response.json();
  }

  apiDidMount (response) {
    console.log('XHR SUCCESS', response);

    this.setState({
      chats: response.chats.map((chat, index) => {
        let cleaned = { ...chat };

        cleaned.client.socket = undefined;

        return cleaned;
      }),
    });
  }

  apiDidNotMount (response) {
    console.log('FAIL', response);
  }

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

    let desc = <span>Wait for clients to connect</span>;
    let list = (
      <NonIdealState
        title="No Active Clients"
        description={desc}
        // visual="people"
      />
    );

    if (this.state.chats.length > 0) {
      list = this.state.chats.map((chat, index) => (
        <ConversationCard
          tabIndex={index}
          key={chat.id}
          client={chat.client}
          updateTime={chat.update_time}
        />
      ));
    }

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
          {list}
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
