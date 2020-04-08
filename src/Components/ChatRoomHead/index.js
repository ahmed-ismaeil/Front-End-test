import React from "react";
import { ChatRoomTitle, Title, UlLIst, UlLIstLi } from "./style.js";

function ChatRoomHead() {
  return (
    <ChatRoomTitle>
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
    </ChatRoomTitle>
  );
}


export default ChatRoomHead;