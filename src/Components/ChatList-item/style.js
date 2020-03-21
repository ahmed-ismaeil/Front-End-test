import styled from "styled-components";

export const ListItemContainer = styled.div`
  overflow-y : scroll;
  height     : 100%;

  &::-webkit-scrollbar {
    width : 8px;
  }
  
  &::-webkit-scrollbar-track {
    background-color : #ededed;
    margin           : 0;
  }
  
  &::-webkit-scrollbar-thumb {
    background    : #c5d2d4;
    border-radius : 4px;
  }
`;

export const ListItem = styled.div`
  display          : flex;
  flex-direction   : row;
  align-items      : center;
  padding          : 17px 15px;
  cursor           : pointer;
  background-color : ${props => (props.active === true ? "#ecf2f2" : "#fff")};
`;

export const Image = styled.img`
  display       : flex;
  align-self    : center;
  margin-right  : ${props => (props.active === true ? "5px" : "8px")};
  border-radius : 50%;
  border        : ${props => (props.active === true ? "3px solid #608a8b" : "")};
  width         : 45px;
  height        : 45px;
`;

export const Description = styled.div`
  display         : flex;
  flex-direction  : row;
  justify-content : space-between;
  width           : 100%;
`;

export const Info = styled.div`
  display        : flex;
  flex-direction : column;
`;

export const Title = styled.p`
  margin      : 0;
  font-size   : 14px;
  font-weight : bold;
`;

export const SupTitle = styled.p`
  margin      : 0;
  font-size   : 12px;
  padding     : 2px 0;
  font-style  : italic;
  font-weight : bold
`;

export const Summary = styled.p`
  margin        : 0;
  font-size     : 12px;
  text-overflow : ellipsis;
  white-space   : nowrap;
  overflow      : hidden;
  width         : 90%;
`;

export const Right = styled.div`
  display         : flex;
  flex-direction  : column;
  justify-content : space-between;
  align-items     : center;
`;

export const Date = styled.p`
  margin    : 0;
  font-size : 11px;
`;

export const DivMsgs = styled.div`
  background-color : #608a8b;
  padding          : 4px 16px;
  border-radius    : 30px;
  visibility       : ${props => (props.active === true ? "visible" : "hidden" )};
`;

export const Msgs = styled.p`
  margin    : 0;
  font-size : 12px;
  color     : #fff;
`;

export const Hr = styled.hr`
  margin           : 0;
  width            : 100%;
  height           : .1px;
  background-color : #546566;
`;