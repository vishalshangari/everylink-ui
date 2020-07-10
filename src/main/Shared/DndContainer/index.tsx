import React from "react";
import styled from "styled-components";
import { useDrop } from "react-dnd";
import { DndContainerProps } from "./models";
import { ElementType } from "../../Builder/models";
import { DndElementItem } from "../DndElement/models";
import _ from "lodash";

export const DndContainer: React.FC<DndContainerProps> = ({
  children,
  accept,
  moveElement,
}) => {
  const [, drop] = useDrop({
    accept,
    drop: (item: DndElementItem, monitor) => {
      const { id, left, top, type } = item;
      const delta = monitor.getDifferenceFromInitialOffset();
      if (_.isNumber(top) && _.isNumber(left) && delta) {
        const newLeft = left + delta?.x;
        const newTop = top + delta?.y;
        switch (type) {
          case ElementType.CONTAINER:
            break;
          default:
            moveElement(id, { left: newLeft, top: newTop });
            break;
        }
      }
    },
  });
  return <Container ref={drop}>{children}</Container>;
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
