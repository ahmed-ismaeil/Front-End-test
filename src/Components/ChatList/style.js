import styled from "styled-components";

export const List = styled.div`
  display        : flex;
  flex-direction : column;
  width          : 350px;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const ListHead = styled.div`
  display          : flex;
  flex-direction   : row;
  justify-content  : space-between;
  align-items      : center;
  background-color : #aaaaaa;
  padding          : 14px 20px;
  height           : 60px;
`;

export const Title  = styled.p`
  font-size : 14px;
  margin    : 0;
  color     : #fff;
`;