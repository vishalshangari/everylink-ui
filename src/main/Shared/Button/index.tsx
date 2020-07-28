import React from "react";
import MaterialButton from "@material-ui/core/Button";
import styled from "styled-components";
import { ButtonProps } from "@material-ui/core";
import { css } from "styled-components";

type Button = ButtonProps;

const Button = ({ children, ...props }: Button) => {
  return (
    <StyledMaterialButton variant="outlined" {...props}>
      {children}
    </StyledMaterialButton>
  );
};

const StyledMaterialButton = styled(MaterialButton)`
  padding: ${(props) => props.theme.padding.base};
`;

export default Button;

export const DesignedButton = styled.button`
  background: white;
  border-radius: 3px;
  outline: none;
  border: none;
  color: ${(props) => props.theme.color.deepGrey};
  cursor: pointer;
`;

export const TransparentButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
`;

export const controlCenterButtonBaseStyle = css`
  color: ${(props) => props.theme.colors.textPrimary};
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.theme.scales.controlCenterButton};
  border: 0;
  outline: 0;
  background: ${(props) => props.theme.colors.controlCenterButtonBg};
  border: 1px solid ${(props) => props.theme.colors.controlCenterButtonBorder};
  &:hover {
    background: ${(props) => props.theme.colors.controlCenterButtonHover};
  }
`;

export const controlCenterButtonAccentedStyle = css`
  color: white;
  background: ${(props) => props.theme.colors.controlCenterButtonAccented};

  border: 1px solid ${({ theme }) => theme.colors.controlCenterButtonAccented};
  &:hover {
    background: ${(props) => props.theme.colors.controlCenterButtonAccented};
  }
`;
