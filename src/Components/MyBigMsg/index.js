import React, { Component } from "react";
import { MyMsg, MyMsgContainer, MsgTextContainer, ChatBubble, MsgDiscription,
        Title, DiscriptionContainer, DiscriptionImg, Date, Period, Message,
        AcceptButton, MsgInfo, MsgInfoP, ImgContainer} from "./style.js";
import axios from "axios";


class MyBigMsg extends Component {
  state = {
    bigmessage: []
  };

  componentDidMount() {
    axios.get("data.json").then(res => {
      this.setState({ bigmessage: res.data.bigmessage });
    });
  }

  render() {
    const { bigmessage } = this.state;
    const largeMsg = bigmessage.map(buttonMsg => {
      return (
        <MyMsg key={buttonMsg.id}>
          <MyMsgContainer>
            <MsgTextContainer>
              <ChatBubble></ChatBubble>
              <MsgDiscription>
                <Title>{buttonMsg.title}</Title>
                <DiscriptionContainer>
                  <div>
                    <DiscriptionImg src={buttonMsg.img1} />
                  </div>
                  <div>
                    <Date>{buttonMsg.date}</Date>
                    <Period>{buttonMsg.period}</Period>
                  </div>
                </DiscriptionContainer>
                <DiscriptionContainer>
                  <div>
                    <DiscriptionImg src={buttonMsg.img2} />
                  </div>
                  <div>
                    <Message>{buttonMsg.summary}</Message>
                  </div>
                </DiscriptionContainer>
                <AcceptButton>accept</AcceptButton>
              </MsgDiscription>
            </MsgTextContainer>

            <MsgInfo>
              <MsgInfoP>{buttonMsg.name}</MsgInfoP>
              <MsgInfoP>{buttonMsg.time}</MsgInfoP>
            </MsgInfo>

          </MyMsgContainer>
          
          <ImgContainer>
            <img src={buttonMsg.charImg} alt="" />
          </ImgContainer>

        </MyMsg>
      );
    });

    return <div>{largeMsg}</div>;
  }
}

export default MyBigMsg;
