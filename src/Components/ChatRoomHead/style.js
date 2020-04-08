import styled from "styled-components";

export const ChatRoomTitle = styled.div`
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