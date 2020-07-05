interface UseThemeParams {
  defaultTheme: string;
  displaySize: DisplaySizes;
}

export type UseThemeDefinition = (
  params: UseThemeParams
) => [(newTheme: string) => void, string, (newTheme: string) => void];

export enum DisplaySizes {
  XL = "xl",
  LG = "lg",
  MD = "md",
  SM = "sm",
}
