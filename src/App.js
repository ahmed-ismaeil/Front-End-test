import React from "react";

import SideMenu from "./Components/SideMenu/index.js";
import ChatList from "./Components/ChatList/index.js";
import ChatRoom from "./Components/ChatRoom/index.js";
import { AppStyle } from  "./AppStyle.js"

function App() {
  return (
    <AppStyle>
      <SideMenu />
      <ChatList />
      <ChatRoom />
    </AppStyle>
  );
}

export default App;
