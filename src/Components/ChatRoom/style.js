import styled from "styled-components";

export const Container = styled.div`
  flex           : 2.5;
  display        : flex;
  flex-direction : column;
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