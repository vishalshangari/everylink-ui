import styled from "styled-components";

export const BuilderRender = styled.div`
  height: 100vh;
  width: 100vw;
  ${(props) => props.theme.flex.row}
  background: ${(props) => props.theme.colors.builderBg};
`;

export const ViewContainer = styled.div`
  height: 100vh;
  ${(props) => props.theme.flex.grow}
  padding: ${(props) => props.theme.padding.base};
`;
