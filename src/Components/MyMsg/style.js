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
  background-color : #ededed;
  padding          : 15px;
  border-radius    : 15px;
  margin-bottom    : 10px;
  position         : relative;
`;

export const ChatBubble = styled.div`
  transform    : skewX(56deg);
  content      : " ";
  position     : absolute;
  bottom       : 0px;
  right        : -11px;
  border-width : 0 0 15px 15px;
  border-style : solid;
  border-color : transparent #ededed;
`;

export const MsgTextP = styled.p`
  margin    : 0;
  font-size : 13px;
  color     : #546566;
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
