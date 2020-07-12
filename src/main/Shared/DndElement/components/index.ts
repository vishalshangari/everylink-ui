import styled from "styled-components";
import { ElementType } from "../../../Builder/models";

export const Resizer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  background-color: blue;
`;

export const DndElementContainer = styled.div.attrs(
  ({
    width,
    height,
    top,
    left,
    isDragging,
    selected,
  }: {
    width: number;
    height: number;
    top?: number;
    left?: number;
    isDragging: boolean;
    type: ElementType;
    selected: boolean;
  }) => ({
    style: {
      transform: "translate3d(" + left + "px," + top + "px, 0)",
      transition: "transform 0.5s",
      position: "absolute",
      background: isDragging ? "yellow" : "transparent",
      width: width + "px",
      height: height,

      overflow: "hidden",
      border: selected ? "1px solid blue" : "1px solid black",
    },
  })
)<{
  width: number;
  height: number;
  top?: number;
  left?: number;
  isDragging: boolean;
  selected: boolean;
}>`
  box-sizing: border-box;
`;
