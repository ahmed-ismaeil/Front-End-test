import styled from "styled-components";

export const OtherMsg = styled.div`
  display         : flex;
  flex-direction  : row-reverse;
  justify-content : flex-end;
  margin-top      : 15px;
`;

export const OtherMsgContainer = styled.div`
  width     : auto;
  max-width : 60%;
  min-width : 300px;
`;

export const MsgTextContainer = styled.div`
  background-color : #e6f2f2;
  padding          : 15px;
  border-radius    : 15px;
  margin-bottom    : 10px;
  position         : relative;
`;

export const ChatBubble = styled.div`
  transform    : skewX(-25deg);
  content      : " ";
  position     : absolute;
  bottom       : 0px;
  left         : -3px;
  border-width : 15px 15px 0 0;
  border-style : solid;
  border-color : #e6f2f2 transparent;
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
  display      : flex;
  align-items  : flex-end;
  margin-right : 10px;
`;
