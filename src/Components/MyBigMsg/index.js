import React from "react";
import { MyMsg, MyMsgContainer, MsgTextContainer, ChatBubble, MsgDiscription, Title,
         DiscriptionContainer, DiscriptionImg, Date, Period, Message, AcceptButton,
         MsgInfo, MsgInfoP, ImgContainer } from "./style.js";

function MyBigMsg() {
  return (
    <MyMsg>
      <MyMsgContainer>
        <MsgTextContainer>
          <ChatBubble></ChatBubble>
          <MsgDiscription>
            <Title>Daily grooming assistance</Title>
            <DiscriptionContainer>
              <div>
                <DiscriptionImg src="images/clock.png" />
              </div>
              <div>
                <Date>Dec 1</Date>
                <Period>Daily</Period>
              </div>
            </DiscriptionContainer>
            <DiscriptionContainer>
              <div>
                <DiscriptionImg src="images/note.png" />
              </div>
              <div>
                <Message>
                  assist with daily grooming activities such as bathing,
                  brushing teeth and hair, as well as dressing
                </Message>
              </div>
            </DiscriptionContainer>
            <AcceptButton>accept</AcceptButton>
          </MsgDiscription>
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

export default MyBigMsg;
