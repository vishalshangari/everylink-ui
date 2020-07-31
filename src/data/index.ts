import { ReactNode, ReactPropTypes, FunctionComponent } from "react";
import { RenderComponent } from "../main/Shared/RenderComponent";

export type Block = ContainerBlockDefinition | TextBlockDefinition;

export enum BlockType {
  Container = `container`,
  Text = `text`,
}

export interface ContainerBlockDefinition {
  __typename: BlockType.Container;
}

export interface TextBlockDefinition {
  __typename: BlockType.Text;
}

export type GenericBlock = ContainerBlock | TextBlock;

export type GenericBlockProps = ContainerProps | TextBlockProps;

export type UniversalBlockConfiguration = {
  typename: BlockType;
  renderComponent: FunctionComponent<GenericBlockProps>;
};

export type ContainerProps = {
  block: ContainerBlock;
};

export type TextProps = {
  block: TextBlock;
};

export class UniversalBlock {
  config: UniversalBlockConfiguration;
  constructor(config: UniversalBlockConfiguration) {
    this.config = {
      typename: config.typename,
      renderComponent: config.renderComponent,
    };
  }
}

export class ContainerBlock extends UniversalBlock {
  constructor() {
    super({
      typename: BlockType.Container,
      renderComponent: RenderComponent.Container,
    });
  }
}

export type TextBlockProps = {
  block: TextBlock;
};

export class TextBlock extends UniversalBlock {
  constructor() {
    super({
      typename: BlockType.Text,
      renderComponent: RenderComponent.Text,
    });
  }
}

// export type ContainerBlock = {
//   main: UniversalBlockDefinition & {
//     nature: "default" | "columns";
//   };
//   appearance: {
//     css: {
//       backgroundColor: string;
//     };
//   };
// };

// export type TextBlock = {
//   main: UniversalBlockDefinition & {
//     content: string;
//   };
//   appearance: {
//     css: {
//       fontColor: string;
//       backgroundColor: string;
//     };
//   };
// };

// export interface ContainerBlockDefinitionNEW {}

// export type UniversalBlockDefinition = {
//   config: {
//     typename: BlockType;
//     renderComponent: React.FunctionComponent;
//   };
// };

interface A {
  val: boolean;
}

class B implements A {
  val = true;
}
