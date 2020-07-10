import _ from "lodash";
import { ElementType, Element } from "../models";
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

export const createDefaultElement = (
  type: ElementType,
  idIncrement: number,
  containerWidth?: number
) => {
  const id = `${type}-${idIncrement}`;
  let newElement: Element<ElementType>;
  switch (type) {
    case ElementType.BUTTON:
      newElement = {
        id,
        type: ElementType.BUTTON,
        position: {
          top: 0,
          left: 0,
          width: 50,
          height: 20,
        },
        style: { label: "fs", link: "sfsa" },
      };
      break;
    case ElementType.IMAGE:
      newElement = {
        id,
        type: ElementType.IMAGE,
        position: {
          top: 0,
          left: 0,
          width: 50,
          height: 50,
        },
        style: { src: "fs" },
      };
      break;
    case ElementType.TEXTBOX:
      newElement = {
        id,
        type: ElementType.TEXTBOX,
        position: {
          top: 0,
          left: 0,
          width: 50,
          height: 20,
        },
        style: { content: "fs" },
      };
      break;
    case ElementType.CONTAINER:
      newElement = {
        id,
        type: ElementType.CONTAINER,
        position: {
          top: 0,
          left: 0,
          width: containerWidth!,
          height: 50,
        },
        style: {
          backgroundColor: "darkblue",
        },
        elements: [],
      };
      break;
    default:
      throw new Error("what");
      break;
  }

  return newElement;
};
