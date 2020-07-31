import React, { FunctionComponent } from "react";
import {
  GenericBlock,
  ContainerProps,
  TextBlockProps,
  GenericBlockProps,
} from "../../../data";

const Container: FunctionComponent<ContainerProps> = ({ block }) => {
  return <div>{block.config.typename}</div>;
};

const Text: FunctionComponent<TextBlockProps> = ({ block }) => {
  return <div> {block.config.typename} </div>;
};

export const RenderComponent = {
  // Container: function Container({ block }: ContainerProps): React.ReactNode {
  //   return <div>{block.config.typename}</div>;
  // },
  // Text: function Text({ block }: TextBlockProps): React.ReactNode {
  //   return <div>{block.config.typename}</div>;
  // },
  Text: Text,
  Container: Container,
};

// const RenderComponentMap = {
//   container: RenderComponent.Container,
//   text: RenderComponent.Text,
// };

const GenerateRenderComponent = (props: GenericBlockProps) => {
  return React.createElement(props.block.config.renderComponent, props);
};

export default GenerateRenderComponent;
