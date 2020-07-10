import { ReactNode } from "react";
import { DisplaySizes } from "../../../hooks/models";

export type Block = ReactNode;
export type AccordionElement = ReactNode;

export enum ElementType {
  CONTAINER = "CONTAINER",
  TEXTBOX = "TEXTBOX",
  BUTTON = "BUTTON",
  IMAGE = "IMAGE",
}

export type Position = {
  top: number;
  left: number;
  height: number;
  width: number;
};

export type ElementList = {
  [id: string]: Element<ElementType>;
};

interface BaseElement<T> {
  id: string;
  type: T;
  position: Position;
  style: StyleMap<T>;
}
type StyleMap<T> = T extends ElementType.CONTAINER
  ? ContainerStyle
  : T extends ElementType.TEXTBOX
  ? TextboxStyle
  : T extends ElementType.BUTTON
  ? ButtonStyle
  : T extends ElementType.IMAGE
  ? ImageStyle
  : unknown;

type ContainerStyle = {
  backgroundColor: string;
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

interface Container {
  elements: Element<ElementType>[];
}

export type Element<T> = T extends ElementType.CONTAINER
  ? BaseElement<T> & Container
  : BaseElement<T>;

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
