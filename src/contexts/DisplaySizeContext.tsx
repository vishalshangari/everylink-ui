import React from "react";
import DisplaySizes from "../hooks/DisplaySizes";

export const DisplaySizeContext = React.createContext<DisplaySizes | undefined>(
  undefined
);
