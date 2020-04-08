import React from "react";
import { Footer, Add, Send, InputContainer, Input } from "./style.js";

function ChatRoomFooter() {
  return (
    <Footer>
      <Add>
        <img src="images/add.png" alt="" />
      </Add>
      <InputContainer>
        <Input placeholder="message" type="text"></Input>
      </InputContainer>
      <Send>
        <img src="images/send.png" alt="" />
      </Send>
    </Footer>
  );
}

export default ChatRoomFooter;
