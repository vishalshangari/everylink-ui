export interface SelectSettingProps {
  label: string;
  options: string[];
  initValue?: string;
  autoText: string;
  handleAutoChange?: (val: boolean) => void;
}

export interface SliderSettingProps {
  label: string;
  initValue?: number;
  min: number;
  max: number;
  step: number;
}

export interface SpacingSettingProps {
  type: "margin" | "padding";
}

export interface ColorSettingProps {
  label: string;
}

export interface AlignmentSettingProps {
  label: string;
}
