import styled from "styled-components";

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
  font-weight  : bold;
`;

export const HeadPSecond = styled(HeadP)`
  margin-left : 5px;
`;