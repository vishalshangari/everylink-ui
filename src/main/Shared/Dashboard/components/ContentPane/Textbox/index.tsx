import React, { useContext } from "react";
import { DashboardViewWrap, DashboardTextEditor } from "../../index";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

import { BuilderContext } from "../../../../../Builder";
import { Data } from "../../../../../Builder/models";
import { TextAreaInput } from "../../Form";

const Textbox = () => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const data: Data = useContext(BuilderContext);

  return (
    <DashboardViewWrap>
      <TextAreaInput />
    </DashboardViewWrap>
  );
};

export default Textbox;
