import styled from "styled-components";

export const Container = styled.div`
  flex           : 2.5;
  display        : flex;
  flex-direction : column;
`;

export const ChatRoomHead = styled.div`
  background-color : #5cafb5;
  display          : flex;
  flex-direction   : row;
  justify-content  : space-between;
  align-items      : center;
  height           : 60px;
  padding          : 14px 20px;
`;

export const Title = styled.p`
  margin        : 0;
  font-size     : 14px;
  white-space   : nowrap;
  max-width     : 200px;
  text-overflow : ellipsis;
  overflow      : hidden;
  color         : #fff;
`;

export const UlLIst = styled.ul`
  list-style  : none;
  display     : flex;
  align-items : center;
  margin      : 0;
`;

export const UlLIstLi = styled.li`
  margin-left : 20px;
`;

export const Head = styled.div`
  display         : flex;
  justify-content : center;
`;

export const HeadP = styled.p`
  color     : #546566;
  font-size : 11px;
`;

export const HeadPFirst = styled(HeadP)`
  margin-right : 5px;
`;

export const HeadPSecond = styled(HeadP)`
  mmarginleft : 5px;
`;

export const ChatMessageList = styled.div`
  overflow-y     : scroll;
  flex           : 1;
  display        : flex;
  flex-direction : column-reverse;
  padding        : 20px;

  &::-webkit-scrollbar {
    width : 8px;
  }

  &::-webkit-scrollbar-track {
    background-color : #fff;
    margin           : 0;
  }

  &::-webkit-scrollbar-thumb {
    background    : #c5d2d4;
    border-radius : 4px;
  }
`;

export const Footer = styled.div`
  width            : 100%;
  background-color : #ededed;
  height           : auto;
  display          : flex;
  align-items      : center;
  padding          : 10px 10px;
`;

export const Add = styled.div`
  width            : 40px;
  height           : 40px;
  background-color : #fff;
  border-radius    : 50%;
  display          : flex;
  justify-content  : center;
  align-items      : center;
  font-size        : 40px;
  margin-right     : 10px;
  cursor           : pointer;
`;

export const Send = styled.div`
  margin-left : 10px;
  cursor      : pointer;
`;

export const InputContainer = styled.div`
  flex : 1;
`;

export const Input = styled.input`
  width         : 100%;
  border        : 0;
  padding       : 10px;
  border-radius : 10px;
  outline       : none;
`;

export const Date = styled.div`
  text-align : center;
`;

export const DateP = styled.p`
  font-size : 11px;
  color     : #aaaaaa;
`;