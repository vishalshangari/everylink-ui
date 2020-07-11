import _ from "lodash";
import { ElementType, Element, ElementStyle } from "../models";
import traverse from "traverse";

export const getElementById = (
  id: string,
  elementArray: Element<ElementType>[]
) => _.find(elementArray, { id });

export const getElementIndexById = (
  id: string,
  elementArray: Element<ElementType>[]
) => _.findIndex(elementArray, { id });

export const getElementPathById = (
  id: string,
  elementArray: Element<ElementType>[]
) => {
  let path = "";
  traverse(elementArray).map(function () {
    if (this.node === id) {
      const pathArray = [...this.path];
      pathArray.pop();
      path = pathArray.join(".");
      this.update(pathArray.join("."));
    }
  });

  return path;
};

const defaultElement = (
  id: string,
  type: ElementType,
  style: ElementStyle,
  width: number,
  height: number,
  index?: number
) => {
  const element: Element<ElementType> = {
    id,
    type,
    position: {
      top: 0,
      left: 0,
      width,
      height,
    },
    style,
  };
  if (type === ElementType.CONTAINER) {
    element.elements = [];
    element.position.index = index;
  }
  return element;
};

export const createDefaultElement = (
  type: ElementType,
  idIncrement: number,
  containerWidth?: number,
  containerHeight?: number,
  containerIndex?: number
) => {
  const id = `${type}-${idIncrement}`;
  let newElement: Element<ElementType>;
  switch (type) {
    case ElementType.BUTTON:
      newElement = defaultElement(id, type, { fontSize: 20 }, 50, 20);
      break;
    case ElementType.IMAGE:
      newElement = defaultElement(id, type, { fontSize: 20 }, 50, 50);
      break;
    case ElementType.TEXTBOX:
      newElement = defaultElement(id, type, { fontSize: 20 }, 50, 20);
      break;
    case ElementType.CONTAINER:
      newElement = defaultElement(
        id,
        type,
        { fontSize: 20 },
        containerWidth!,
        containerHeight!,
        containerIndex!
      );
      break;
    default:
      throw new Error("what");
      break;
  }

  return newElement;
};
