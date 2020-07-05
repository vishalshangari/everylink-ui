import styled from "styled-components";

export const Box = styled.div`
  background: grey;
`;

export const ModeBtn = styled.div`
  position: relative;
  justify-content: center;
  top: 1rem;
  left: 1rem;
  button {
    padding: 0.5rem 1rem;
    justify-content: center;
    margin-right: 0.5rem;
    color: #000;
  }
  z-index: 999;
`;

export const ViewContainer = styled.div`
  height: 100vh;
  ${(props) => props.theme.flex.grow}
  padding: ${(props) => props.theme.padding.base};
`;

export const BuilderContainer = styled.div`
  height: 100vh;
  width: 100vw;
  ${(props) => props.theme.flex.row}
  background: ${(props) => props.theme.colors.builderBg};
`;
