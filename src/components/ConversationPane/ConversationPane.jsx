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

// TODO: Move this to somewhere that makes sense
const API_URI = 'http://localhost:8000';

export class ConversationPaneComponent extends Component {
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

  // TODO: I feel like this can be simplified and removed
  apiParse (response) {
    return response.json();
  }

  apiDidMount (response) {
    const chats = response.chats.map((chat, index) => {
      let cleaned = { ...chat };

      cleaned.client.socket = undefined;

      return cleaned;
    });

    console.log('XHR SUCCESS', response);

    // Update the Application state to have the conversations
    // dispatch(updateConversations(chats));

    this.setState({
      chats,
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
    const { chats } = this.state;

    let desc = <span>Wait for clients to connect</span>;
    let list = (
      <NonIdealState
        title="No Active Clients"
        description={desc}
        // visual="people"
      />
    );

    console.log('RENDER', chats);

    if (chats.length > 0) {
      list = chats.map((chat, index) => (
        <ConversationCard
          tabIndex={index}
          key={index}
          chat={chat.id}
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

const ConversationPane = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConversationPaneComponent);

export default ConversationPane;
