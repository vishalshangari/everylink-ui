import React from "react";
import styled from "styled-components";

interface TextField extends React.ComponentPropsWithoutRef<"input"> {
  color?: string;
}

const TextField = ({ color, ...props }: TextField) => {
  return <LoginTextField color={color} {...props} />;
};

const LoginTextField = styled.input<{ color?: string }>`
  padding: ${(props) => props.theme.padding.base};
  color: ${(props) => props.color || "green"};
`;

export default TextField;
