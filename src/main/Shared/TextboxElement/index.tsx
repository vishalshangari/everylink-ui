import styled from "styled-components";

export const TextboxElement = styled.div<{ newStyle: any }>`
  ${(props) =>
    Object.keys(props.newStyle).map(
      (property) => `${property}: ${props.newStyle[property]};`
    )}
`;
