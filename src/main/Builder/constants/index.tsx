import React from "react";
import {
  MdAddCircle,
  MdSave,
  MdUndo,
  MdRedo,
  MdSwapHoriz,
} from "react-icons/md";
import { ControlCenterActionDef } from "../../Shared/ResponsiveControlPanel/models";

export const controlCenterActions: ControlCenterActionDef[][] = [
  [
    {
      type: "Add",
      description: "Add a new container",
      displayType: `icon`,
      icon: <MdAddCircle />,
    },
    {
      type: "Publish",
      description: "Publish site",
      displayType: `icon`,
      icon: <MdSave />,
    },
    {
      type: "Undo",
      description: "Undo last change",
      displayType: `icon`,
      icon: <MdUndo />,
    },
    {
      type: "Redo",
      description: "Redo last change",
      displayType: `icon`,
      icon: <MdRedo />,
    },
  ],
  [
    {
      type: "Mode",
      description: "",
      displayType: `icon`,
      icon: <></>,
    },
    {
      type: "Switch",
      description: "Switch editor layout",
      displayType: `icon`,
      icon: <MdSwapHoriz />,
    },
  ],
];
