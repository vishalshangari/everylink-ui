import styled from "styled-components";
export const ViewContainer = styled.div`
  height: 100vh;
  ${(props) => props.theme.flex.grow}
  padding: ${(props) => props.theme.padding.base};
`;
