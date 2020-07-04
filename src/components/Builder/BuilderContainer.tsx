import React, { ReactNode } from "react";
import styled from "styled-components";
import Data from "../../dummydata/testInterface";

interface BuilderContext {
  data: Data;
  children?: ReactNode;
}

const BuilderRender = styled.div`
  height: 100vh;
  width: 100vw;
  ${(props) => props.theme.flex.row}
  background: ${(props) => props.theme.colors.builderBg};
`;

const BuilderContainer: React.FC<BuilderContext> = ({
  data,
  children,
}: BuilderContext) => {
  return <BuilderRender>{children}</BuilderRender>;
};

export default BuilderContainer;
