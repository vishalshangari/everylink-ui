// Color list def
interface Colors {
  [key: string]: string;
}

// Colors list
const colors: Colors = {
  grey0: "rgb(0, 0, 0)",
  grey1: "rgb(9, 10, 11)",
  grey2: "rgb(18, 20, 22)",
  grey3: "rgb(25, 27, 29)",
  grey4: "rgb(32, 34, 36)",
  grey5: "rgb(39, 41, 43)",
  grey6: "rgb(46, 48, 50)",
  grey7: "rgb(53, 55, 57)",
  grey8: "rgb(60, 62, 64)",
  grey9: "rgb(67, 69, 71)",
  grey10: "rgb(74, 76, 78)",
  grey11: "rgb(81, 83, 85)",
  grey12: "rgb(88, 90, 92)",
  grey13: "rgb(95, 97, 99)",
  grey14: "rgb(102, 104, 106)",
  grey15: "rgb(109, 111, 113)",
  grey16: "rgb(116, 118, 120)",
  grey17: "rgb(123, 125, 127)",
  grey18: "rgb(130, 132, 134)",
  grey19: "rgb(137, 139, 141)",
  grey20: "rgb(144, 146, 148)",
  grey21: "rgb(151, 153, 155)",
  grey22: "rgb(158, 160, 162)",
  grey23: "rgb(165, 167, 169)",
  grey24: "rgb(172, 174, 176)",
  grey25: "rgb(179, 181, 183)",
  grey26: "rgb(186, 188, 190)",
  grey27: "rgb(193, 195, 197)",
  grey28: "rgb(200, 202, 204)",
  grey29: "rgb(207, 209, 211)",
  grey30: "rgb(214, 216, 218)",
  grey31: "rgb(221, 223, 225)",
  grey32: "rgb(228, 230, 232)",
  grey33: "rgb(235, 237, 239)",
  grey34: "rgb(242, 244, 246)",
  grey35: "rgb(255, 255, 255)",
  blackFogra: "#161c23",
  burntSienna: "#e76f51",
  bottleGreen: "#2E7054",
  bottleGreenDim: "#265D46",
  azure: "#1084ff",
  azureActive: "#3295FF",
};

// Color assignment object def
interface ThemeColors {
  [key: string]: string | { dark: { [key: string]: string } };
  // TODO add modes here i.e.:
  // modes: { dark: { [key: string]: string }, light: { [key: string]: string } }
  modes: {
    dark: {
      [key: string]: string;
    };
  };
}

// Color assignment object
const themeColors: ThemeColors = {
  builderBg: colors.grey2,
  elementDialogBg: colors.grey10,
  elementButtonBg: colors.grey7,
  // TODO add modes here i.e.:
  // modes: { dark: { builderBg: ... }, light: { builderBg: ... } }
  modes: {
    dark: {
      // Text
      textPrimary: colors.grey32,
      textSecondary: colors.grey24,
      textSecondaryRGB: "#acaeb0",
      textTertiary: colors.grey16,

      // Builder general
      builderBg: colors.grey2,

      // Dashboard general
      dashboardBg: colors.grey3,
      dashboardBorders: colors.grey6,
      dashboardScrollbarHover: colors.grey8,

      // Dashboard components
      dashboardTitleBg: colors.grey3,
      dashboardActiveTab: colors.grey4,
      styleSelectorBg: colors.grey4,

      // Buttons, etc.
      elementDialogBg: colors.grey3,
      elementButtonBg: colors.grey4,
      elementButtonBorder: colors.grey6,
      dashboardDoneBtn: colors.bottleGreen,
      dashboardDoneBtnHover: colors.bottleGreenDim,
      dashboardActionBtn: colors.grey5,
      dashboardActionBtnHover: colors.grey4,
      addBlockButton: "#B03618",
      addBlockButtonShadow: colors.grey1,
      controlCenterButtonBg: colors.grey4,
      controlCenterButtonHover: colors.grey6,
      controlCenterButtonBorder: colors.grey2,
      controlCenterButtonShadow: colors.grey1,
      controlCenterButtonAccented: colors.azure,
      controlCenterButtonAccentedActive: colors.azureActive,

      // Form elements
      formAccent: colors.burntSienna,
      dashboardInputBg: colors.grey6,
      sliderTrack: colors.grey7,
      dashboardSettingsButtonActive: colors.grey8,
    },
  },
};

interface PaddingDefinition {
  doubleBase: string;
  base: string;
  halfBase: string;
}

export const padding: PaddingDefinition = {
  doubleBase: "2rem",
  base: "1rem",
  halfBase: "0.5rem",
};

// Scale object def
export interface Scales {
  xl: {
    [key: string]:
      | string
      | {
          [key: string]: string;
        };
  };
  lg: {
    [key: string]:
      | string
      | {
          [key: string]: string;
        };
  };
  md: {
    [key: string]:
      | string
      | {
          [key: string]: string;
        };
  };
  sm: {
    [key: string]:
      | string
      | {
          [key: string]: string;
        };
  };
}

// Scale object
export const scales: Scales = {
  xl: {
    panel: "32rem",
    builderDialog: "680px",
    display: {
      controlCenter: "visible",
      addBlockButton: "top: calc(50% - 2.25rem);",
    },
    fontSize: {
      dashboardTitle: "2rem",
      styleActionButtons: "1.5rem",
    },
    settingsGrid: "1fr 1fr",
    addBlockButton: "padding: 1.5rem",
    controlCenterButton: "height: 4rem; font-size: 2rem; padding: 0 1.5rem;",
  },
  lg: {
    panel: "26rem",
    builderDialog: "600px",
    display: {
      controlCenter: "visible",
      addBlockButton: "top: calc(50% - 2.25rem);",
    },
    fontSize: {
      addBlockButton: "1.5rem",
    },
    settingsGrid: "1fr",
    addBlockButton: "padding: 1.25rem",
    controlCenterButton: "height: 3rem; font-size: 1.25rem; padding: 0 1rem;",
  },
  md: {
    panel: "28rem",
    display: {
      controlCenter: "none",
      addBlockButton: "bottom: 1rem;",
    },
    fontSize: {
      addBlockButton: "3rem",
    },
    settingsGrid: "1fr",
    addBlockButton: "padding: 1.5rem",
    controlCenterButton: "height: 4rem; font-size: 1.5rem; padding: 0 1rem;",
  },
  sm: {
    panel: "22rem",
    display: {
      controlCenter: "none",
      addBlockButton: "bottom: 1rem;",
    },
    fontSize: {
      controlCenterButton: "1.5rem",
    },
    settingsGrid: "1fr",
    addBlockButton: "padding: 1.25rem",
    controlCenterButton: "height: 4rem; font-size: 1.5rem; padding: 0 1rem;",
  },
};

// Main theme object def
export interface Theme {
  colors: ThemeColors;
  scales: Scales;
  breakpoints: {
    xl: string;
    lg: string;
    md: string;
    sm: string;
  };
  color: {
    [key: string]: string;
  };
  fonts: {
    [key: string]: string;
  };
  fontSizes: {
    [key: string]: string;
  };
  borders: {
    [key: string]: string;
  };
  borderRadius: {
    [key: string]: string;
  };
  padding: PaddingDefinition;
  margin: {
    [key: string]: string;
  };
  width: {
    sidePanelLg: string;
    panel: string;
  };
  flex: {
    column: string;
    row: string;
    centered: string;
    grow: string;
  };
}

// Main theme object
export const theme: Theme = {
  colors: themeColors,
  scales: scales,
  color: {
    deepGrey: "#333333",
    darkBackground: "#090a0b",
    darkBackgroundLight: "#1c1f22",
    darkBackgroundLighter: "#212529",
    borderGrey: "#495057",
    borderGreyDark: "#343A40",
    offwhite: "#CED4DA",
    offwhiteBright: "#F8F9FA",
    lightGrey: "#ADB5BD",
    lightMiddleGrey: "#495057",
    middleGrey: "#6C757D",
    deleteBtn: "#3a262a",
    deleteBtnHover: "#81353B",
    doneBtn: "#243d35",
    doneBtnHover: "#358262",
    dashboardAccent: "#f77f00",
  },
  breakpoints: {
    xl: "80em",
    lg: "60em",
    md: "37.5em",
    sm: "26.5em",
  },
  fonts: {
    brand: "Lobster Two",
    main: "Open Sans",
    dashSetting: "font-size: 1rem; font-weight: 400; line-height: 1rem;",
    dashSettingsHeader:
      "font-size: 1.5rem; font-weight: 700; line-height: 1.5rem;",
  },
  fontSizes: {
    base: "1rem",
    buttonLarge: "1.125rem",
    dashboardHeader: "2.125rem",
    dashboardText: "1rem",
    dashboardTextSmall: "0.875rem",
    sliderSetting: "1.5rem",
  },
  padding: padding,
  margin: {
    base: "1rem",
    halfBase: "0.5rem",
    doubleBase: "2rem",
  },
  borderRadius: {
    small: "0.5rem",
    xsmall: "0.25rem",
  },
  borders: {
    dashboard: "1px solid rgb(255,255,255,0.1)",
  },
  width: {
    sidePanelLg: "550px",
    panel: "550px",
  },
  flex: {
    column: "display: flex; flex-direction: column;",
    row: "display: flex; flex-direction: row;",
    centered: "display: flex; justify-content: center; align-items: center;",
    grow: "flex-grow: 1;",
  },
};
