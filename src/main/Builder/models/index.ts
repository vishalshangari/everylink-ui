import { ReactNode } from "react";
import { DisplaySizes } from "../../../hooks/models";

export type Block = ReactNode;
export type AccordionElement = ReactNode;

export interface Data {
  type: string;
  textContent: string;
  appearance: {
    theme: {
      default: string;
    };
    font: string;
    color: {
      text: string;
      background: string;
    };
    character: {
      size: string;
      lineHeight: string;
      fontWeight: string;
      letterSpacing: string;
    };
  };
}

export interface BuilderProps {
  displaySize: DisplaySizes;
  handleThemeChange: (newTheme: string) => void;
  currentTheme: string;
}

export interface ControlPanelActions {
  type: string;
  description: string;
  icon: ReactNode;
  action: () => void;
}
