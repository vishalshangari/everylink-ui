import styled from "styled-components";

export const DraggableContainer = styled.div<{
  newStyle: unknown;
}>`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  ${(props) => props.theme.flex.column}
  ${(props) => props.theme.flex.centered}
`;
