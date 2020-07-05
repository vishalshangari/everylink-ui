import styled from "styled-components";
import { TransparentButton } from "../../Button";
import { Accordion } from "react-accessible-accordion";

export const StyledAccordion = styled(Accordion)``;

export const DashboardContainer = styled.div`
  padding: ${(props) => props.theme.padding.base};
  border-bottom: ${(props) => props.theme.borders.dashboard};
`;

export const DashboardHeader = styled(DashboardContainer)`
  h3 {
    float: left;
    font-size: ${(props) => props.theme.fontSizes.dashboardHeader};
  }
  border-bottom: ${(props) => props.theme.borders.dashboard};
`;

export const NewContainerBtn = styled(TransparentButton)`
  height: 100%;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
  ${(props) => props.theme.flex.column}
  ${(props) => props.theme.flex.centered}
  margin-left: auto;
`;

export const OptionsContainer = styled.div``;
