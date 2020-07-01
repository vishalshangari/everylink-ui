import React from "react";
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

const Textbox = () => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  return (
    <DashboardViewWrap>
      <DashboardTextbox>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus
          consectetur tempus. Cras et pretium lorem.
        </p>
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
