import React, { Component } from "react";
import { MyMsg, MyMsgContainer, MsgTextContainer, ChatBubble, MsgTextP, MsgInfo,
        MsgInfoP, MsgInfoP600, ImgContainer, Image} from "./style.js";
import axios from "axios";

class MsgContent extends Component {
  state = {
    message: []
  };

  componentDidMount() {
    axios.get("data.json").then(res => {
      this.setState({ message: res.data.message });
    });
  }

  render() {
    const { message } = this.state;
    const messages = message.map(textmsg => {
    return (
      <MyMsg key={textmsg.id} msg={textmsg.action}>
          <MyMsgContainer>
            <MsgTextContainer msg={textmsg.action}>
              <ChatBubble msg={textmsg.action}></ChatBubble>
              <MsgTextP>{textmsg.content}</MsgTextP>
            </MsgTextContainer>
            <MsgInfo>
              <MsgInfoP600>{textmsg.name}</MsgInfoP600>
              <MsgInfoP>{textmsg.time}</MsgInfoP>
            </MsgInfo>
          </MyMsgContainer>
          <ImgContainer msg={textmsg.action}>
            <Image src={textmsg.img} alt="" />
          </ImgContainer>
        </MyMsg>
      );
    });
    
    return <div>{messages}</div>;
  }
}

export default MsgContent;
