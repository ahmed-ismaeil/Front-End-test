import React from "react";
import { MyMsg, MyMsgContainer, MsgTextContainer, ChatBubble,
         MsgTextP, MsgInfo, MsgInfoP, ImgContainer } from './style.js';

function MyMessag() {
  return (
    <MyMsg>
      <MyMsgContainer>
        <MsgTextContainer>
          <ChatBubble></ChatBubble>
          <MsgTextP>
            That’s a good call. I’ll be stopping by later to have dinner with
            her. Pizza for everyone! Join us. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Maecenas a lorem enim. Praesent
            accumsan feugiat lorem et finibus. Vestibulum scelerisque id eros
            dignissim tincidunt. Morbi id tortor egestas, feugiat massa viverra,
            posuere nisl.
          </MsgTextP>
        </MsgTextContainer>
        <MsgInfo>
          <MsgInfoP>me</MsgInfoP>
          <MsgInfoP>1:45p</MsgInfoP>
        </MsgInfo>
      </MyMsgContainer>
      <ImgContainer>
        <img src="images/SChar-1.png" alt="" />
      </ImgContainer>
    </MyMsg>
  );
}

export default MyMessag;
