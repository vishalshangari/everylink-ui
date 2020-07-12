import React from "react";
import styled from "styled-components";
import { useDrop } from "react-dnd";
import { DndContainerProps } from "./models";
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
        let newLeft = left + delta?.x;
        let newTop = top + delta?.y;
        newLeft = Math.round(newLeft / 10) * 10;
        newTop = Math.round(newTop / 10) * 10;
        switch (type) {
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
  box-sizing: border-box;
`;
