import React, { ReactNode } from "react";
import SidePanel from "../SidePanel";
import { IconContext } from "react-icons";
import { IoIosAddCircle } from "react-icons/io";
import ReactTooltip from "react-tooltip";
import { OptionsTrayProps } from "./models";
import {
  NewContainerBtn,
  OptionsContainer,
  StyledAccordion,
  DashboardHeader,
} from "./components";

const OptionsTray: React.FC<OptionsTrayProps> = ({
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

export default OptionsTray;
