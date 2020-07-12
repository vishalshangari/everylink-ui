import styled from "styled-components";

export const ButtonElement = styled.button<{ newStyle: any }>`
  ${(props) =>
    Object.keys(props.newStyle).map(
      (property) => `${property}: ${props.newStyle[property]};`
    )}
`;
