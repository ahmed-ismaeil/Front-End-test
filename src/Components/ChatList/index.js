import React from "react";
import { List, ListHead, Title } from './style.js';
import ChatListItem from './../ChatList-item/index.js';

function ChatList() {
  return (
    <List>
      <ListHead>
        <Title>Conversations</Title>
        <img src="images/new_conversation.png" alt="Conversations-logo" />
      </ListHead>
      <ChatListItem />
    </List>
  );
}

export default ChatList;
