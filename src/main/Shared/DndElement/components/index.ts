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
    type,
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
      transform:
        type === ElementType.CONTAINER
          ? "translate3d(" + left + "px," + top + "px, 0)"
          : "none",
      position: type === ElementType.CONTAINER ? "relative" : "absolute",
      background: isDragging ? "yellow" : "transparent",
      width: width + "px",
      height: height,

      overflow: "hidden",
      top,
      left,
      border: selected ? "2px solid blue" : "none",
    },
  })
)<{
  width: number;
  height: number;
  top?: number;
  left?: number;
  isDragging: boolean;
  type: ElementType;
  selected: boolean;
}>``;
