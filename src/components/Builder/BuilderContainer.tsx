import React, { ReactNode } from "react";
import styled from "styled-components";

const BuilderContainer = styled.div`
  height: 100vh;
  width: 100vw;
  ${(props) => props.theme.flex.row}
  background: ${(props) => props.theme.colors.builderBg};
`;

export default BuilderContainer;
