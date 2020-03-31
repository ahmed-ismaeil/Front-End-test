import React, { Component } from "react";
import { ListItemContainer, ListItem, Image, Description, Info, Title, SupTitle,
         Summary, Right, Date, DivMsgs, Msgs, Hr } from "./style.js";
import axios from "axios";

class ChatListItem extends Component {
  state = {
    works: []
  };

  componentDidMount() {
    axios.get("data.json").then(res => {
      this.setState({ works: res.data.works });
    });
  }

  render() {
    const { works } = this.state;
    const workList = works.map(workItem => {
      return (
        <div key={workItem.id}>
          <ListItem active={workItem.active}>
            <div>
              <Image src={workItem.img} alt="" active={workItem.active} />
            </div>
            <Description>
              <Info>
                <Title>{workItem.title}</Title>
                <SupTitle>{workItem.suptitle}</SupTitle>
                <Summary>{workItem.summary}</Summary>
              </Info>
              <Right>
                <Date>{workItem.date}</Date>
                <DivMsgs active={workItem.active}>
                  <Msgs>{workItem.msgs}</Msgs>
                </DivMsgs>
              </Right>
            </Description>
          </ListItem>
          <Hr />
        </div>
      );
    });

    return <ListItemContainer>{workList}</ListItemContainer>;
  }
}

export default ChatListItem;
