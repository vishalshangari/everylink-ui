import React from "react";
import {
  MdAddCircle,
  MdSave,
  MdUndo,
  MdRedo,
  MdAccountCircle,
  MdViewHeadline,
} from "react-icons/md";

interface ControlCenterIconsDef {
  [key: string]: React.ReactElement;
}

export const controlCenterIcons: ControlCenterIconsDef = {
  Add: <MdAddCircle />,
  Publish: <MdSave />,
  Undo: <MdUndo />,
  Redo: <MdRedo />,
  Account: <MdAccountCircle />,
  DashboardToggle: <MdViewHeadline />,
};
