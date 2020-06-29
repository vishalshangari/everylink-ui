import styled from "styled-components";
export const DesignedButton = styled.button`
  background: white;
  border-radius: 3px;
  outline: none;
  border: none;
  color: ${(props) => props.theme.color.deepGrey};
  cursor: pointer;
`;

export const TransparentButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
`;
