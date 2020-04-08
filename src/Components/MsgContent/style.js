import styled from "styled-components";

export const MyMsg = styled.div`
  display         : flex;
  flex-direction  : ${props => (props.msg ===  "send"   ?    "row"      : "")};
  flex-direction  : ${props => (props.msg === "receive" ? "row-reverse" : "")};
  justify-content : flex-end;
  margin-top      : 15px;
`;

export const MyMsgContainer = styled.div`
  max-width : 60%;
  min-width : 300px;
`;

export const MsgTextContainer = styled.div`
  background-color : ${props => (props.msg ===  "send"   ? "#ededed" : "")};
  background-color : ${props => (props.msg === "receive" ? "#e6f2f2" : "")};
  padding          : 15px;
  border-radius    : 15px;
  margin-bottom    : 10px;
  position         : relative;
`;

export const ChatBubble = styled.div`
  transform    : ${props => (props.msg ===  "send"   ? "skewX(56deg)"  : "")};
  transform    : ${props => (props.msg === "receive" ? "skewX(-25deg)" : "")};
  content      : " ";
  position     : absolute;
  bottom       : 0px;
  right        : ${props => (props.msg ===  "send"   ? "-11px;"        : "")};
  left         : ${props => (props.msg === "receive" ? "-3px"          : "")};
  border-width : ${props => (props.msg ===  "send"   ? "0 0 15px 15px" : "")};
  border-width : ${props => (props.msg === "receive" ? "15px 15px 0 0" : "")};
  border-style : solid;
  border-color : ${props => (props.msg ===  "send"   ? "transparent #ededed" : "")};
  border-color : ${props => (props.msg === "receive" ? "#e6f2f2 transparent" : "")};
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

export const MsgInfoP600 = styled(MsgInfoP)`
  font-weight: bold;
`;

export const ImgContainer = styled.div`
  display      : flex;
  align-items  : flex-end;
  border-radius: 50%;
  margin-left  : ${props => (props.msg ===  "send"   ? "10px" : "")};
  margin-right : ${props => (props.msg === "receive" ? "10px" : "")};
`;

export const Image = styled.img`
  border-radius : 50%;
`;