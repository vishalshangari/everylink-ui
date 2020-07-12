import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import { useResize } from "../../../hooks/useResize";
import { DndElementProps } from "./models";
import { ElementType } from "../../Builder/models";
import { DndElementContainer, Resizer } from "./components";

export const DndElement: React.FC<DndElementProps> = ({
  id,
  width,
  height,
  left,
  top,
  type,
  originIndex,
  resizeElement,
  selectedElement,
  updateSelectedElement,
  children,
}) => {
  const elementRef = useRef<HTMLDivElement>();
  const [{ isDragging }, drag] = useDrag({
    item: { type, id, originIndex, height, width, left, top },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [resize] = useResize({
    item: { id, width, height },
    handleSizeChange: (
      thisId: string,
      thisWidth: number,
      thisHeight: number
    ) => {
      resizeElement(thisId, thisWidth, thisHeight);
    },
  });

  const selected = selectedElement ? id === selectedElement.id : false;
  return (
    <DndElementContainer
      ref={(node) => {
        if (node) {
          elementRef.current = node;
          drag(node);
        }
      }}
      isDragging={isDragging}
      width={width}
      height={height}
      top={top}
      left={left}
      id={id}
      onClick={(e) => {
        e.preventDefault();
        updateSelectedElement(id);
      }}
      selected={selected}
    >
      {children}
      <Resizer ref={resize} />
    </DndElementContainer>
  );
};
