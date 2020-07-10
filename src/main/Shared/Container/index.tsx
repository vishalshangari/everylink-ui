import React, { useCallback } from "react";
import { DndElement } from "../DndElement";
import { ElementType, Element } from "../../Builder/models";
import { ContainerProps } from "./models";
import { DndContainer } from "../DndContainer";
import { DraggableContainer } from "./components";

export const Container: React.FC<ContainerProps> = ({
  container,
  moveElement,
  findElement,
  resizeElement,
  addElement,
}) => {
  const renderContainer = useCallback(
    (currentContainer: Element<ElementType.CONTAINER>) => {
      const { id, type, position, style } = currentContainer;
      const { width, height, left, top } = position;
      return (
        <DndElement
          acceptDrop={[
            ElementType.TEXTBOX,
            ElementType.BUTTON,
            ElementType.IMAGE,
            ElementType.CONTAINER,
          ]}
          id={id}
          width={width}
          height={height}
          left={left}
          top={top}
          type={type}
          moveElement={moveElement}
          findElement={findElement}
          resizeElement={resizeElement}
        >
          <DraggableContainer newStyle={style}>
            <div
              style={{ position: "absolute", bottom: 0, left: 0, zIndex: 1 }}
            >
              <button onClick={() => addElement(id, ElementType.CONTAINER)}>
                cnt
              </button>
              <button onClick={() => addElement(id, ElementType.TEXTBOX)}>
                txt
              </button>

              <button onClick={() => addElement(id, ElementType.BUTTON)}>
                btn
              </button>

              <button onClick={() => addElement(id, ElementType.IMAGE)}>
                img
              </button>
            </div>
            <DndContainer
              accept={[
                ElementType.TEXTBOX,
                ElementType.BUTTON,
                ElementType.IMAGE,
                ElementType.CONTAINER,
              ]}
              moveElement={moveElement}
            >
              {currentContainer.elements.map((element) => {
                const {
                  id: elementId,
                  type: elementType,
                  position: elementPosition,
                  style: elementStyle,
                } = element;
                const {
                  height: elementHeight,
                  width: elementWidth,
                  left: elementLeft,
                  top: elementTop,
                } = elementPosition;
                const elementRender = (
                  <DndElement
                    id={elementId}
                    key={elementId}
                    type={elementType}
                    width={elementWidth}
                    height={elementHeight}
                    left={elementLeft}
                    top={elementTop}
                    moveElement={moveElement}
                    findElement={findElement}
                    resizeElement={resizeElement}
                  >
                    {elementType === ElementType.TEXTBOX ? (
                      <div>textbox{id}</div>
                    ) : elementType === ElementType.IMAGE ? (
                      <img
                        style={{
                          backgroundColor: "red",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    ) : elementType === ElementType.BUTTON ? (
                      <div>button{id}</div>
                    ) : elementType === ElementType.CONTAINER ? (
                      renderContainer(element as Element<ElementType.CONTAINER>)
                    ) : (
                      <div>error</div>
                    )}
                  </DndElement>
                );
                return elementRender;
              })}
            </DndContainer>
          </DraggableContainer>
        </DndElement>
      );
    },
    [addElement, findElement, moveElement, resizeElement]
  );
  return renderContainer(container);
};
