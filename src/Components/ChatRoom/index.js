import React from "react";
import MyMessag from "./../MyMsg/index.js";
import OtherMessage from "./../OtherMsg/index.js";
import MyBigMsg from "./../MyBigMsg/index.js";
import { Container, ChatRoomHead, Title, UlLIst, UlLIstLi,
         Head, HeadPFirst, HeadPSecond, ChatMessageList,
         Footer, Add, Send, InputContainer, Input, Date, DateP } from "./style.js";

function ChatRoom() {
  return (
    <Container>
      <ChatRoomHead>
        <Title>Mom's Discharge Plan</Title>
        <UlLIst>
          <UlLIstLi>
            <a href="null">
              <img src="images/ico_group.png" alt="" />
            </a>
          </UlLIstLi>
          <UlLIstLi>
            <a href="null">
              <img src="images/ico_filter.png" alt="" />
            </a>
          </UlLIstLi>
          <UlLIstLi>
            <a href="null">
              <img src="images/ico_search.png" alt="" />
            </a>
          </UlLIstLi>
        </UlLIst>
      </ChatRoomHead>

      <Head>
        <HeadPFirst>Starter Care Plan created + daily actions added</HeadPFirst>
        <HeadPSecond>12:10p</HeadPSecond>
      </Head>

      <ChatMessageList>
        <MyMessag />
        <OtherMessage />
        <Date>
          <DateP>Apr 1</DateP>
        </Date>
        <MyBigMsg />
      </ChatMessageList>

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
    </Container>
  );
}

export default ChatRoom;
