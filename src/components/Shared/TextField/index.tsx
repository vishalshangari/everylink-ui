import React from "react";
import MaterialTextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { TextFieldProps } from "@material-ui/core";

type TextField = TextFieldProps;

const TextField = ({ ...props }: TextField) => {
  return <StyledMaterialTextField variant="outlined" {...props} />;
};

const StyledMaterialTextField = styled(MaterialTextField)`
  padding: ${(props) => props.theme.padding.base};
`;

export default TextField;
