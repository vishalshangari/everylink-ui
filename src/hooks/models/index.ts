import { Theme } from "../../theme";

interface UseThemeParams {
  defaultTheme: string;
  displaySize: DisplaySizes;
}

export type UseThemeDefinition = (
  params: UseThemeParams
) => [(newTheme: string) => Theme, string, (newTheme: string) => void];

export enum DisplaySizes {
  XL = "xl",
  LG = "lg",
  MD = "md",
  SM = "sm",
}

export interface UseResizeSpec {
  item: {
    id: string;
    width: number;
    height: number;
  };
  handleSizeChange: (id: string, width: number, height: number) => void;
}
