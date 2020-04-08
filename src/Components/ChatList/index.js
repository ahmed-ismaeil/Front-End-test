import React        from "react";
import ChatListItem from './../ChatList-item/index.js';
import { List, 
  ListHead, Title } from './style.js';

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
