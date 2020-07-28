import { TransitionStatus } from "react-transition-group/Transition";

export interface StyleSelectorProps {
  styles: string[];
  state: TransitionStatus;
}
