import React, { useContext } from "react";
import {
  DashboardHeader,
  DashboardTextbox,
  DashboardViewWrap,
  DashboardTextboxSmall,
  PaddedDashboardContainer,
  DashboardTextEditor,
  DashboardElementActions,
  DashboardDoneBtn,
  DashboardDeleteBtn,
  DashboardDuplicateBtn,
} from "../../DashboardStyledComponents/DashFormats";
import {
  MdDelete,
  MdFilterNone,
  MdCheckCircle,
  MdModeEdit,
} from "react-icons/md";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

import { BuilderContext } from "../../../";
import Data from "../../../../../dummydata/testInterface";

const Textbox = () => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const data: Data = useContext(BuilderContext);

  return (
    <DashboardViewWrap>
      <DashboardTextbox>
        <p>{data.textContent}</p>
      </DashboardTextbox>
      <PaddedDashboardContainer>
        <DashboardTextEditor>
          <Editor
            editorState={editorState}
            onChange={setEditorState}
            placeholder="Enter text here..."
          />
        </DashboardTextEditor>
      </PaddedDashboardContainer>
    </DashboardViewWrap>
  );
};

export default Textbox;
