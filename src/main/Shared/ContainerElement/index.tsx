import React, { useState } from "react";
import { ElementType } from "../../Builder/models";
import { ContainerProps } from "./models";
import { DraggableContainer } from "./components";
import { BaseElement } from "../Element";

export const ContainerElement: React.FC<ContainerProps> = ({
  container,
  moveElement,
  findElement,
  resizeElement,
  addElement,
  selectedElement,
  updateSelectedElement,
}) => {
  const [hover, setHover] = useState(false);
  const { id, style } = container;
  return (
    <DraggableContainer
      newStyle={style}
      onMouseOver={(e) => {
        e.stopPropagation();
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      hover={hover}
    >
      {hover && (
        <div style={{ position: "absolute", bottom: 0, left: 0, zIndex: 1 }}>
          <button onClick={() => addElement(id, ElementType.CONTAINER)}>
            cnt
          </button>
          <button onClick={() => addElement(id, ElementType.TEXTBOX)}>
            txt
          </button>

          <button onClick={() => addElement(id, ElementType.BUTTON)}>
            btn
          </button>

          <button onClick={() => addElement(id, ElementType.IMAGE)}>img</button>
        </div>
      )}
      {container.elements?.map((element) => (
        <BaseElement
          key={element.id}
          element={element}
          addElement={addElement}
          moveElement={moveElement}
          findElement={findElement}
          resizeElement={resizeElement}
          selectedElement={selectedElement}
          updateSelectedElement={updateSelectedElement}
        />
      ))}
    </DraggableContainer>
  );
};
