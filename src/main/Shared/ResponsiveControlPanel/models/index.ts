import { ReactNode, Dispatch, SetStateAction } from "react";

export interface ControlCenterActionDef {
  type: string;
  description: string;
  icon: ReactNode;
  action?: () => void;
}

export interface ResponsiveControlCenterProps {
  displaySize: string;
  options: Array<ControlCenterActionDef> | Array<Array<ControlCenterActionDef>>;
  mobileOptions: Array<ControlCenterActionDef>;
}
