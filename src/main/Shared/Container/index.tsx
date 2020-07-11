import React, { useCallback, useState } from "react";
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
  selectedElement,
  updateSelectedElement,
}) => {
  const [hover, setHover] = useState(false);
  const { id, type, position, style } = container;
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
      selectedElement={selectedElement}
      updateSelectedElement={updateSelectedElement}
    >
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

            <button onClick={() => addElement(id, ElementType.IMAGE)}>
              img
            </button>
          </div>
        )}
        <ContainerElement
          container={container}
          addElement={addElement}
          moveElement={moveElement}
          findElement={findElement}
          resizeElement={resizeElement}
          selectedElement={selectedElement}
          updateSelectedElement={updateSelectedElement}
        ></ContainerElement>
      </DraggableContainer>
    </DndElement>
  );
};

export const ContainerElement: React.FC<ContainerProps> = ({
  container,
  addElement,
  moveElement,
  findElement,
  resizeElement,
  selectedElement,
  updateSelectedElement,
}) => {
  return (
    <DndContainer
      accept={[
        ElementType.TEXTBOX,
        ElementType.BUTTON,
        ElementType.IMAGE,
        ElementType.CONTAINER,
      ]}
      moveElement={moveElement}
    >
      {container.elements?.map((element) => {
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
        const renderElement =
          elementType === ElementType.TEXTBOX ? (
            <div style={elementStyle}>textbox{elementId}</div>
          ) : elementType === ElementType.IMAGE ? (
            <img
              style={{
                backgroundColor: "red",
                width: "100%",
                height: "100%",
              }}
            />
          ) : elementType === ElementType.BUTTON ? (
            <button>button{elementId}</button>
          ) : elementType === ElementType.CONTAINER ? (
            <Container
              addElement={addElement}
              moveElement={moveElement}
              resizeElement={resizeElement}
              findElement={findElement}
              selectedElement={selectedElement}
              updateSelectedElement={updateSelectedElement}
              container={element as Element<ElementType.CONTAINER>}
            />
          ) : (
            <div>error</div>
          );
        return (
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
            selectedElement={selectedElement}
            updateSelectedElement={updateSelectedElement}
          >
            {renderElement}
          </DndElement>
        );
      })}
    </DndContainer>
  );
};
