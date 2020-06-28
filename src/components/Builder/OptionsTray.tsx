import React from "react";
import SidePanel from "../Shared/SidePanel";
import styled from "styled-components";

const OptionsTray = () => {
  return (
    <SidePanel side="right">
      <OptionsContainer>
        <button>Add Link</button>
      </OptionsContainer>
    </SidePanel>
  );
};

const OptionsContainer = styled.div`
  padding: ${(props) => props.theme.padding.base};
  ${(props) => props.theme.flex.column}
  ${(props) => props.theme.flex.centered}
`;

export default OptionsTray;
