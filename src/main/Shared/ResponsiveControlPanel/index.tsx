import React, { ReactNode } from "react";
import styled from "styled-components";
import { ControlCenterActionDef, ResponsiveControlCenterProps } from "./models";
import Tooltip from "rc-tooltip";
import {
  controlCenterButtonBaseStyle,
  controlCenterButtonAccentedStyle,
} from "../Button";

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
    list: Array<ControlCenterActionDef>,
    index?: number
  ): ReactNode => {
    return (
      <ControlCenterGroup key={index}>
        {list.map((action, index) => (
          <Tooltip
            {...createControlCenterTooltipProps()}
            key={index}
            overlay={action.description}
          >
            <ControlCenterButton
              publish={action.publish ? true : undefined}
              onClick={action.action}
            >
              {action.displayType === `icon` ? (
                action.icon
              ) : (
                <ControlCenterButtonText>{action.icon}</ControlCenterButtonText>
              )}
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
      return options.map((list, index) =>
        generateControlCenterGroup(list, index)
      );
    }
    return generateControlCenterGroup(options);
  };

  return displaySize === "xl" || displaySize === "lg" ? (
    <ControlCenter>{renderControlCenterGroup(options)}</ControlCenter>
  ) : (
    <MobileControlCenter>
      {renderControlCenterGroup(mobileOptions)}
    </MobileControlCenter>
  );
};

// Desktop Control Center styles
export const ControlCenterGroup = styled.div`
  display: flex;
`;
export const ControlCenterButtonText = styled.span`
  font-size: 1rem;
  padding-bottom: 0.125rem;
`;
export const ControlCenterButton = styled.button<{ publish?: boolean }>`
  ${controlCenterButtonBaseStyle}
  font-size: ${(props) => props.theme.scales.fontSize.controlCenterButton};
  ${({ publish }) => (publish ? controlCenterButtonAccentedStyle : ``)};
  ${ControlCenterButtonText} {
      border-bottom: 1px solid transparent
  }
  &:hover {
    ${ControlCenterButtonText} {
      border-bottom: 1px solid ${({ theme, publish }) =>
        publish ? `white` : `transparent`};
    }
  }
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
    &:first-child {
      border-top-left-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
    }
    &:last-child {
      border-top-right-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }
    &:not(:last-child) {
      border-right: none;
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
