import { Element, ElementType } from "../../../Builder/models";

export interface DashboardProps {
  panelRight: boolean;
  isDesktop: boolean;
  selectedElement?: Element<ElementType> | undefined;
  updateElement: (element: Element<ElementType>) => void;
  dashboardHidden: boolean;
}
