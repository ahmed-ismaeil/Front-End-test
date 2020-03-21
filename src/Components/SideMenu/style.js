import styled from "styled-components";

export const Menu = styled.div`
  background-color : #4aafb7;
  display          : flex;
  flex-direction   : column;
  justify-content  : space-between;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Ul = styled.ul`
  margin     : 0;
  list-style : none;
  padding    : 0;
`;

export const Anchor = styled.a`
  cursor : pointer;
`;

export const ListItem = styled.li`
  padding         : 11px 18px;
  display         : flex;
  justify-content : center;

  &:hover {
    background-color : #79c4ca;
  }

  background-color : ${props => props.active === "1" ? '#79c4ca' : '#4aafb7'};
`;
