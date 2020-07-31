import styled from "styled-components";

export const StyledBox = styled.div<{ backgroundColor: string }>`
  background: ${(props) => props.backgroundColor};
  height: 100px;
  margin-bottom: ${(props) => props.theme.margin.halfBase};
  border-radius: 2px;
`;

export const StyledActionPanel = styled.div<{ panelRight: boolean }>`
  position: absolute;
  top: 0;
  ${(props) => props.theme.flex.column}
  justify-content: center;
  height: 100%;
  overflow: hidden;
  ${(props) => (props.panelRight ? "left: 1rem" : "right: 1rem")};
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
    &:hover {
      background: ${(props) => props.theme.color.borderGreyDark};
      color: #fff;
    }
    > * {
      vertical-align: middle;
    }
    &:first-child {
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
    }
    &:last-child {
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }
  }
  z-index: 1;
`;

export const ViewContainer = styled.div`
  position: relative;
  height: 100vh;
  flex-grow: 1;
  ${(props) => props.theme.flex.column}
`;

export const BuilderContainer = styled.div`
  color: ${(props) => props.theme.colors.textPrimary};
  transition: 0.2s background ease;
  position: relative;
  height: 100vh;
  width: 100vw;
  ${(props) => props.theme.flex.row}
  background: ${(props) => props.theme.colors.builderBg};
`;
