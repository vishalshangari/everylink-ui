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
      icon: <MdAddCircle />,
    },
    {
      type: "Publish",
      description: "Publish site",
      icon: <MdSave />,
    },
    {
      type: "Undo",
      description: "Undo last change",
      icon: <MdUndo />,
    },
    {
      type: "Redo",
      description: "Redo last change",
      icon: <MdRedo />,
    },
  ],
  [
    {
      type: "Mode",
      description: "",
      icon: <></>,
    },
    {
      type: "Switch",
      description: "Switch editor layout",
      icon: <MdSwapHoriz />,
    },
  ],
];
