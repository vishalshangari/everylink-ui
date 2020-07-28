import React from "react";

import { StyleSelectorProps } from "./models";
import styled from "styled-components";
import { SidePaddedDashboardContainer } from "..";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";

const StyleSelector: React.FC<StyleSelectorProps> = ({ styles, state }) => {
  return (
    <StylesAnimation state={state}>
      <StylesPointer>
        <Point />
      </StylesPointer>
      <StylesWrapper>
        <StylesContainer>
          <ul>
            {styles.map((style, index) => (
              <li key={index}>
                {style}
                <StyleActions>
                  <button>
                    <FiEdit2 />
                  </button>
                  <button>
                    <AiOutlineDelete />
                  </button>
                </StyleActions>
              </li>
            ))}
          </ul>
        </StylesContainer>
      </StylesWrapper>
    </StylesAnimation>
  );
};

export default StyleSelector;

const StylesAnimation = styled.div<{ state: string }>`
  margin-top: 1rem;
  background: ${(props) => props.theme.colors.dashboardBg};
  transition: 0.5s ease all;
  z-index: 3;
  ${({ state }) =>
    state === "entered" || state === `entering`
      ? `max-height: 30rem; ${StylesWrapper} {opacity: 1}; ${StylesPointer} {opacity: 1};`
      : `max-height: 0; ${StylesWrapper} {opacity: 0}; ${StylesPointer} {opacity: 0};`}
`;

const StylesWrapper = styled(SidePaddedDashboardContainer)`
  transition: 0.25s ease all;
  height: 100%;
  overflow: hidden;
`;

const StylesContainer = styled.div`
  border-radius: 0.25rem;
  background: ${(props) => props.theme.colors.styleSelectorBg};
  border: 1px solid ${(props) => props.theme.colors.dashboardBorders};
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    padding: 0.75rem 1.5rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.dashboardBorders};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  li:last-child {
    border-bottom: none;
  }
`;

const StyleActions = styled.div`
  button {
    border: none;
    outline: none;
    background: transparent;
    color: ${(props) => props.theme.colors.textPrimary};
    font-size: ${(props) => props.theme.scales.fontSize.styleActionButtons};
    opacity: 0.5;
    cursor: pointer;
    margin-left: 1rem;
    transition: 0.2s ease opacity;
    &:hover {
      opacity: 1;
    }
  }
`;

const StylesPointer = styled(SidePaddedDashboardContainer)`
  transition: 0.25s ease all;
  position: relative;
`;

const Point = styled.div`
  position: absolute;
  right: 5rem;
  top: -8px;
  border-color: ${(props) => props.theme.colors.dashboardBorders} transparent;
  border-style: solid;
  border-width: 0px 8px 8px 8px;
  height: 0px;
  width: 0px;
`;
