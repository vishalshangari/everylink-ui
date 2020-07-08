import { ReactNode } from "react";
import { DisplaySizes } from "../../../hooks/models";

export type Block = ReactNode;
export type AccordionElement = ReactNode;

type ElementType = "container" | "textbox" | "button" | "image";

export type Position = {
  top: number;
  left: number;
  height: number;
  width: number;
};

export type ElementList = {
  [id: string]: Element<ElementType>;
};

export interface Element<T extends ElementType> {
  type: T;
  position: Position;
  style: StyleMap<T>;
}

type StyleMap<T> = T extends "container"
  ? ContainerStyle
  : T extends "textbox"
  ? TextboxStyle
  : T extends "button"
  ? ButtonStyle
  : T extends "image"
  ? ImageStyle
  : unknown;

type ContainerStyle = {
  height: number;
};

type TextboxStyle = {
  content: string;
};

type ButtonStyle = {
  label: string;
  link: string;
};

type ImageStyle = {
  src: string;
};

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
