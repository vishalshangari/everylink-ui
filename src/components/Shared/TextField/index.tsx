import React from "react";
import styled from "styled-components";

interface TextField extends React.ComponentPropsWithoutRef<"input"> {
  color?: string;
}

const TextField = ({ color, ...props }: TextField) => {
  return <StyledMaterialTextField color={color} {...props} />;
};

const StyledMaterialTextField = styled.input<{ color?: string }>`
  padding: ${(props) => props.theme.padding.base};
  color: ${(props) => props.color || "green"};
`;

export default TextField;
