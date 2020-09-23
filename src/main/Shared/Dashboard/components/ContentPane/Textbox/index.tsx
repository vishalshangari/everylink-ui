import React from "react";
import {
  DashboardTextbox,
  DashboardViewWrap,
  PaddedDashboardContainer,
  DashboardTextEditor,
} from "../../index";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

const Textbox = () => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  return (
    <DashboardViewWrap>
      <DashboardTextbox>
        <p>Test</p>
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
