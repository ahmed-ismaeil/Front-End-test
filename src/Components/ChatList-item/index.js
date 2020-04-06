import React, { useState, useEffect } from "react";
import { ListItemContainer, ListItem, Image, Description, Info, Title,
         SupTitle, Summary, Right, Date, DivMsgs, Msgs, Hr } from "./style.js";
import axios from "axios";

const ChatListItem = () => {
  const [dataItem, setDataItem] = useState([]);

  useEffect(() => {
    axios.get("data.json").then((res) => {
      setDataItem(res.data.dataItem);
    });
  }, []);

  const data = dataItem.map((dataItem) => {
    return (
      <div key={dataItem.id}>
        <ListItem active={dataItem.active}>
          <div>
            <Image src={dataItem.img} alt="" active={dataItem.active} />
          </div>
          <Description>
            <Info>
              <Title>{dataItem.title}</Title>
              <SupTitle>{dataItem.suptitle}</SupTitle>
              <Summary>{dataItem.summary}</Summary>
            </Info>
            <Right>
              <Date>{dataItem.date}</Date>
              <DivMsgs active={dataItem.active}>
                <Msgs>{dataItem.msgs}</Msgs>
              </DivMsgs>
            </Right>
          </Description>
        </ListItem>
        <Hr />
      </div>
    );
  });

  return <ListItemContainer>{data}</ListItemContainer>;
};

export default ChatListItem;
