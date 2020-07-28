import { useState } from "react";
import { UseThemeDefinition } from "./models";
import { theme as baseTheme } from "../theme";
import { merge, get } from "lodash";

const useTheme: UseThemeDefinition = ({ defaultTheme, displaySize }) => {
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
    .matches;
  const userSelectedColorMode = localStorage.getItem("userSelectedColorMode");
  const initTheme = userSelectedColorMode
    ? userSelectedColorMode
    : prefersDarkMode
    ? `dark`
    : ``;
  const [currentTheme, setCurrentTheme] = useState(initTheme);

  const handleThemeChange = (newTheme: string) => {
    setCurrentTheme(newTheme);
    localStorage.setItem("userSelectedColorMode", newTheme);
  };

  const getNewTheme = (newTheme: string) =>
    merge({}, baseTheme, {
      colors: get(baseTheme.colors.modes, newTheme, baseTheme.colors),
      scales: get(baseTheme.scales, displaySize, baseTheme.scales),
    });

  return [getNewTheme, currentTheme, handleThemeChange];
};

export default useTheme;
