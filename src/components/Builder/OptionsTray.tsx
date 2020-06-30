import React, { ReactNode } from "react";
import SidePanel from "../Shared/SidePanel";
import styled from "styled-components";
import { TransparentButton } from "../../elements/Buttons";
import { IconContext } from "react-icons";
import { Accordion } from "react-accessible-accordion";
import { IoIosAddCircle } from "react-icons/io";
import ReactTooltip from "react-tooltip";

interface OptionsTray {
  addBlock: () => void;
  accordionElements: ReactNode;
}

const OptionsTray: React.FC<OptionsTray> = ({
  addBlock,
  accordionElements,
}) => {
  return (
    <SidePanel side="right">
      <ReactTooltip effect="solid" />
      <DashboardHeader>
        <h3>SEGMENTS</h3>

        <NewContainerBtn
          data-tip="Add new section"
          data-background-color="#fff"
          data-text-color="#333"
          onClick={addBlock}
        >
          <IoIosAddCircle title="Add new section" />
        </NewContainerBtn>
      </DashboardHeader>
      <OptionsContainer>
        <IconContext.Provider value={{ size: "0.75em" }}>
          <StyledAccordion
            allowZeroExpanded={true}
            allowMultipleExpanded={true}
          >
            {accordionElements}
          </StyledAccordion>
        </IconContext.Provider>
      </OptionsContainer>
    </SidePanel>
  );
};

const StyledAccordion = styled(Accordion)``;

const DashboardContainer = styled.div`
  padding: ${(props) => props.theme.padding.base};
  border-bottom: ${(props) => props.theme.borders.dashboard};
`;

const DashboardHeader = styled(DashboardContainer)`
  h3 {
    float: left;
    font-size: ${(props) => props.theme.fontSizes.dashboardHeader};
  }
  border-bottom: ${(props) => props.theme.borders.dashboard};
`;

const NewContainerBtn = styled(TransparentButton)`
  height: 100%;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
  ${(props) => props.theme.flex.column}
  ${(props) => props.theme.flex.centered}
  margin-left: auto;
`;

const OptionsContainer = styled.div``;

export default OptionsTray;
