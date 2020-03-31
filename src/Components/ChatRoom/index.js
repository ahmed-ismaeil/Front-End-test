import React            from "react";
import MyBigMsg         from "./../MyBigMsg/index.js";
import ChatRoomHead     from "./../ChatRoomHead/index.js";
import ChatRoomSupitle  from "./../ChatRoomSupitle/index.js";
import ChatRoomDate     from "./../ChatRoomDate/index.js";
import ChatRoomFooter   from "./../ChatRoomFooter/index.js";
import MsgContent       from "./../MsgContent/index.js";
import { Container,
      ChatMessageList } from "./style.js";

function ChatRoom() {
  return (
    <Container>
      <ChatRoomHead />

      <ChatRoomSupitle />

      <ChatMessageList>
        <MsgContent />
        
        <ChatRoomDate />

        <MyBigMsg />
      </ChatMessageList>

      <ChatRoomFooter />
    </Container>
  );
}

export default ChatRoom;
