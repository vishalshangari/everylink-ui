import styled from "styled-components";

export const DraggableContainer = styled.div<{
  newStyle: unknown;
  hover: boolean;
}>`
  width: 100%;
  height: 100%;
  border: ${(props) => (props.hover ? "1px solid black" : "none")};
  ${(props) => props.theme.flex.column}
  ${(props) => props.theme.flex.centered}
`;
