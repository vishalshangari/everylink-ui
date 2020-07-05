import React, { ReactNode } from "react";
import styled from "styled-components";

const BuilderRender = styled.div`
  height: 100vh;
  width: 100vw;
  ${(props) => props.theme.flex.row}
  background: ${(props) => props.theme.colors.builderBg};
`;

const BuilderContainer: React.FC = ({ children }) => {
  return <BuilderRender>{children}</BuilderRender>;
};

export default BuilderContainer;
