import React from "react";
import MaterialButton from "@material-ui/core/Button";
import styled from "styled-components";
import { ButtonProps } from "@material-ui/core";

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
