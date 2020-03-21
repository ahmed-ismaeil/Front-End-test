import React from "react";
import { OtherMsg, OtherMsgContainer, MsgTextContainer, ChatBubble,
         MsgTextP, MsgInfo, MsgInfoP, ImgContainer } from "./style.js"

function OtherMessage() {
  return (
    <OtherMsg>
      <OtherMsgContainer>
        <MsgTextContainer>
          <ChatBubble></ChatBubble>
          <MsgTextP>
            I moved Karen’s knitting kit from the study upstairs to the the
            living room.
          </MsgTextP>
        </MsgTextContainer>
        <MsgInfo>
          <MsgInfoP>sk</MsgInfoP>
          <MsgInfoP>1:45p</MsgInfoP>
        </MsgInfo>
      </OtherMsgContainer>
      <ImgContainer>
        <img src="images/SChar-2.png" alt="" />
      </ImgContainer>
    </OtherMsg>
  );
}

export default OtherMessage;
