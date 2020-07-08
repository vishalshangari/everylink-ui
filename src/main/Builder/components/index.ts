import styled, { css } from "styled-components";
import { ControlPanelActions } from "../models";

export const Box = styled.div<{ backgroundColor: string }>`
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
    transition: 0.1s;
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
  height: 100vh;
  flex-grow: 1;
  ${(props) => props.theme.flex.column}
`;

export const BuilderContainer = styled.div`
  height: 100vh;
  width: 100vw;
  ${(props) => props.theme.flex.row}
  background: ${(props) => props.theme.colors.builderBg};
`;

// Desktop Control Center styles
const controlCenterButtonBaseStyle = css`
  color: #fff;
  cursor: pointer;
  padding: ${(props) => props.theme.scales.padding.controlCenterButton};
  border: 0;
  outline: 0;
  background: ${(props) => props.theme.colors.controlCenterButtonDef};
  border-right: 1px solid
    ${(props) => props.theme.colors.controlCenterButtonBorder};
`;

export const ControlCenterMainActions = styled.div``;
export const ControlCenterSettings = styled.div``;
export const ControlCenterButton = styled.button`
  ${controlCenterButtonBaseStyle}
  font-size: ${(props) => props.theme.scales.fontSize.controlCenterButton};
`;
export const ControlCenter = styled.div`
  position: relative;
  margin: 1rem auto 0;
  ${(props) => props.theme.flex.row};
  display: ${(props) => props.theme.scales.display.controlCenter};
  ${ControlCenterMainActions} {
    border-radius: 1rem;
    box-shadow: 0px 0px 5px #000;
  }
  ${ControlCenterSettings} {
    border-radius: 1rem;
    box-shadow: 0px 0px 5px #000;
    margin-left: 2rem;
  }
  ${ControlCenterButton} {
    transition: 0.1s;
    &:first-child {
      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
    }
    &:last-child {
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
      border-right: none;
    }
    &:hover {
      background: ${(props) => props.theme.colors.controlCenterButtonHover};
    }
  }
`;

// Mobile Control Center styles

export const MobileControlCenter = styled.div`
  ${ControlCenterMainActions} {
    ${(props) => props.theme.flex.row}
  }
  ${ControlCenterSettings} {
    display: none;
  }
  ${ControlCenterButton} {
    flex-grow: 1;
  }
  width: 100%;
`;
