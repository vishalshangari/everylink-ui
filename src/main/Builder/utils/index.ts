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
  const paths = traverse(elementArray).map(function () {
    if (this.node === id) {
      const pathArray = [...this.path];
      console.log(pathArray);
      pathArray.pop();
      path = pathArray.join(".");
      this.update(pathArray.join("."));
    }
  });

  console.log(paths);

  return path;
};
