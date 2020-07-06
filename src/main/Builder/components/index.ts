import styled, { keyframes } from "styled-components";

export const Box = styled.div<{ backgroundColor: string }>`
  background: ${(props) => props.backgroundColor};
  height: 100px;
  margin-bottom: ${(props) => props.theme.margin.halfBase};
  border-radius: 2px;
`;

export const ActionPanel = styled.div`
  position: absolute;
  justify-content: center;
  border-radius: 1rem;
  overflow: hidden;
  left: 1rem;
  button {
    font-size: 2rem;
    padding: 2rem 1rem;
    justify-content: center;
    line-height: 2rem;
    border: none;
    display: block;
    outline: none;
    background: ${(props) => props.theme.color.darkBackgroundLight};
    color: #fff;
    cursor: pointer;
    margin-bottom: 2px;
    transition: 0.1s;
    &:hover {
      background: ${(props) => props.theme.color.borderGreyDark};
      color: #fff;
    }
    > * {
      vertical-align: middle;
    }
  }
  z-index: 999;
`;

export const ViewContainer = styled.div`
  height: 100vh;
  padding: ${(props) => props.theme.padding.base};
  flex-grow: 1;
  ${(props) => props.theme.flex.centered}
  ${(props) => props.theme.flex.column}
`;

export const BuilderContainer = styled.div`
  height: 100vh;
  width: 100vw;
  ${(props) => props.theme.flex.row}
  background: ${(props) => props.theme.colors.builderBg};
`;
