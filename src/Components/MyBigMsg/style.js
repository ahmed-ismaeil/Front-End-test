import styled from "styled-components";

export const MyMsg = styled.div`
  display         : flex;
  justify-content : flex-end;
  margin-top      : 15px;
`;

export const MyMsgContainer = styled.div`
  width     : auto;
  max-width : 60%;
  min-width : 300px;
`;

export const MsgTextContainer = styled.div`
  padding          : 15px;
  border-radius    : 15px;
  margin-bottom    : 10px;
  position         : relative;
  background-color : #ebf2f2;
  border-bottom    : 2px solid #aaaaaa;
  border-left      : 4px solid #aaaaaa;
`;

export const ChatBubble = styled.div`
  transform    : skewX(56deg);
  content      : " ";
  position     : absolute;
  bottom       : 0px;
  right        : -11px;
  border-width : 0 0 15px 15px;
  border-style : solid;
  border-color : transparent #ebf2f2;
`;

export const MsgDiscription = styled.div`
  display        : flex;
  flex-direction : column;
`

export const Title = styled.div`
  margin      : 0 0 10px 0;
  color       : #546566;
  white-space : nowrap;
`

export const DiscriptionContainer = styled.div`
display       : flex;
margin-bottom : 10px;
`

export const DiscriptionImg = styled.img`
margin-right : 13px;
`

export const Date = styled.p`
  font-size     : 12px;
  margin-bottom : 10px !important;
  color         : #546566;
  margin        : 0;
`

export const Period = styled.p`
  font-size : 12px;
  color     : #546566;
  margin    : 0;
`;

export const Message = styled.p`
  font-size : 12px;
  color     : #546566;
  margin    : 0;
`

export const AcceptButton = styled.button`
  width            : 120px;
  background-color : #e97f7a;
  border           : 0;
  color            : #fff;
  padding          : 8px;
  border-radius    : 8px;
  font-size        : 14px;
  cursor           : pointer;
  outline          : none;
`;

export const MsgInfo = styled.div`
  display         : flex;
  justify-content : space-between;
`;

export const MsgInfoP = styled.p`
  margin    : 0;
  font-size : 11px;
  color     : #b34d4d4d;
`;

export const ImgContainer = styled.div`
  display     : flex;
  align-items : flex-end;
  margin-left : 10px;
`;
