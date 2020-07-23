import React, { ReactNode } from "react";
import styled from "styled-components";
import { ControlCenterActionDef, ResponsiveControlCenterProps } from "./models";
import Tooltip from "rc-tooltip";
import { controlCenterButtonBaseStyle } from "../Button";

export const ResponsiveControlCenter: React.FC<ResponsiveControlCenterProps> = ({
  displaySize,
  options,
  mobileOptions,
}) => {
  const createControlCenterTooltipProps = () => {
    return {
      mouseEnterDelay: 0.75,
      mouseLeaveDelay: 0,
      placement: "bottom",
      ...(displaySize !== "xl" && displaySize !== "lg"
        ? { visible: false }
        : {}),
    };
  };

  function isArrayOfArrays(
    options:
      | Array<ControlCenterActionDef>
      | Array<Array<ControlCenterActionDef>>
  ): options is Array<Array<ControlCenterActionDef>> {
    return (options as Array<Array<ControlCenterActionDef>>).every((i) =>
      Array.isArray(i)
    );
  }

  const generateControlCenterGroup = (
    list: Array<ControlCenterActionDef>
  ): ReactNode => {
    return (
      <ControlCenterGroup>
        {list.map((action, index) => (
          <Tooltip
            {...createControlCenterTooltipProps()}
            key={index}
            overlay={action.description}
          >
            <ControlCenterButton onClick={action.action}>
              {action.icon}
            </ControlCenterButton>
          </Tooltip>
        ))}
      </ControlCenterGroup>
    );
  };

  const renderControlCenterGroup = (
    options:
      | Array<ControlCenterActionDef>
      | Array<Array<ControlCenterActionDef>>
  ): ReactNode => {
    if (isArrayOfArrays(options)) {
      return options.map((list) => generateControlCenterGroup(list));
    }
    return generateControlCenterGroup(options);
  };

  return displaySize == "xl" || displaySize == "lg" ? (
    <ControlCenter>{renderControlCenterGroup(options)}</ControlCenter>
  ) : (
    <MobileControlCenter>
      {renderControlCenterGroup(mobileOptions)}
    </MobileControlCenter>
  );
};

// Desktop Control Center styles
export const ControlCenterGroup = styled.div``;
export const ControlCenterButton = styled.button`
  ${controlCenterButtonBaseStyle}
  font-size: ${(props) => props.theme.scales.fontSize.controlCenterButton};
`;
export const ControlCenter = styled.div`
  position: relative;
  margin: 1rem auto 0;
  ${(props) => props.theme.flex.row};
  display: ${(props) => props.theme.scales.display.controlCenter};

  ${ControlCenterGroup} {
    border-radius: 0.5rem;
    box-shadow: 0px 0px 5px
      ${(props) => props.theme.colors.controlCenterButtonShadow};
    margin-right: ${(props) => props.theme.margin.doubleBase};
    &:last-child {
      margin-right: 0;
    }
  }
  ${ControlCenterButton} {
    transition: 0.1s;
    &:first-child {
      border-top-left-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
    }
    &:last-child {
      border-top-right-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
      border-right: none;
    }
    &:hover {
      background: ${(props) => props.theme.colors.controlCenterButtonHover};
    }
  }
`;

// Mobile Control Center styles

export const MobileControlCenter = styled.div`
  ${ControlCenterGroup} {
    ${(props) => props.theme.flex.row}
  }
  ${ControlCenterButton} {
    flex-grow: 1;
  }
  width: 100%;
`;
