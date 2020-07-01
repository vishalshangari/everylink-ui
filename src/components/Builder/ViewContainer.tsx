import styled from "styled-components";
export const ViewContainer = styled.div`
  display: flex;
  height: calc(
    100% - ${(props) => props.theme.padding.base} -
      ${(props) => props.theme.padding.base}
  );
  width: calc(
    100% - ${(props) => props.theme.width.sidePanelLg} -
      ${(props) => props.theme.padding.base} -
      ${(props) => props.theme.padding.base}
  );
  padding: ${(props) => props.theme.padding.base};
`;
