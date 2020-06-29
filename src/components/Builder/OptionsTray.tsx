import React from "react";
import SidePanel from "../Shared/SidePanel";
import styled from "styled-components";

interface OptionsTray {
  addBlock: () => void;
}

const OptionsTray: React.FC<OptionsTray> = ({ addBlock }) => {
  return (
    <SidePanel side="right">
      <OptionsContainer>
        <button onClick={addBlock}>Add Block</button>
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
