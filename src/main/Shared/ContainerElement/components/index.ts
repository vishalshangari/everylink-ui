import styled from "styled-components";

export const DraggableContainer = styled.div<{
  newStyle: unknown;
  hover: boolean;
}>`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;
