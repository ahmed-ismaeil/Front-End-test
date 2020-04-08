import styled from "styled-components";

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
