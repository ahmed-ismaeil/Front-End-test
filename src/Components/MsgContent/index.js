import React, { useState, useEffect } from "react";
import { MyMsg, MyMsgContainer, MsgTextContainer, ChatBubble, MsgTextP, MsgInfo,
        MsgInfoP, MsgInfoP600, ImgContainer, Image} from "./style.js";
import axios from "axios";

const MsgContent = () => {
  const [ message , setMessage ] = useState([])


  useEffect ( () => {
    axios.get("data.json").then( res => { setMessage( res.data.message ) } )
  } , [] )

  const messagetext = message.map( ( item ) => {
    return (
      <MyMsg key={item.id} msg={item.action}>
          <MyMsgContainer>
            <MsgTextContainer msg={item.action}>
              <ChatBubble msg={item.action}></ChatBubble>
              <MsgTextP>{item.content}</MsgTextP>
            </MsgTextContainer>
            <MsgInfo>
              <MsgInfoP600>{item.name}</MsgInfoP600>
              <MsgInfoP>{item.time}</MsgInfoP>
            </MsgInfo>
          </MyMsgContainer>
          <ImgContainer msg={item.action}>
            <Image src={item.img} alt="" />
          </ImgContainer>
        </MyMsg>
      )
  })
    return <div>{messagetext}</div>;
}

export default MsgContent;
