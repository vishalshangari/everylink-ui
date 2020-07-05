import React from "react";
import { BuilderRender } from "./components";

const BuilderContainer: React.FC = ({ children }) => {
  return <BuilderRender>{children}</BuilderRender>;
};

export default BuilderContainer;
