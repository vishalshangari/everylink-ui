import React from "react";
import { DisplayRenderProps } from "./models";
import { StyledBox } from "../../Builder/components";
import {
  BlockType,
  ContainerBlockDefinition,
  TextBlockDefinition,
} from "../../../data";

const DisplayRender: React.FC<DisplayRenderProps> = ({ items }) => {
  return (
    <>
      {items.map((item, idx) => {
        switch (item.__typename) {
          case BlockType.Container:
            return (
              <ContainerBlock __typename={item.__typename}>
                {item.__typename}
              </ContainerBlock>
            );
          case BlockType.Text:
            return (
              <TextBlock __typename={item.__typename}>
                {item.__typename}
              </TextBlock>
            );
        }
      })}
    </>
  );
};

export default DisplayRender;

const color = () =>
  "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);

const ContainerBlock: React.FC<ContainerBlockDefinition> = ({ children }) => {
  return <StyledBox backgroundColor={color()}>{children}</StyledBox>;
};
const TextBlock: React.FC<TextBlockDefinition> = ({ children }) => (
  <StyledBox backgroundColor={color()}>{children}</StyledBox>
);
