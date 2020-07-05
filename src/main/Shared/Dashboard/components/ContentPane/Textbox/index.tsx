import React, { useContext } from "react";
import {
  DashboardTextbox,
  DashboardViewWrap,
  PaddedDashboardContainer,
  DashboardTextEditor,
} from "../../index";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

import { BuilderContext } from "../../../../../Builder";
import { Data } from "../../../../../Builder/models";

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
