import { ReactNode } from "react";

export interface ControlCenterActionDef {
  type: string;
  description: string;
  icon: ReactNode;
  action?: () => void;
}
