// Color list def
interface Colors {
  [key: string]: {
    [key: number]: string;
  };
}

// Colors list
const colors: Colors = {
  grey: {
    0: "#000000",
    1: "#090a0b",
    2: "#121416",
    3: "#212529",
    4: "#343A40",
    5: "#495057",
    6: "#6C757D",
    7: "#ADB5BD",
    8: "#CED4DA",
    9: "#DEE2E6",
    10: "#E9ECEF",
    11: "#F8F9FA",
  },
};

// Color assignment object def
interface ThemeColors {
  builderBg: string;
  // TODO add modes here i.e.:
  // modes: { dark: { [key: string]: string }, light: { [key: string]: string } }
  modes: {
    light: {
      [key: string]: string;
    };
    dark: {
      [key: string]: string;
    };
  };
}

// Color assignment object
const themeColors: ThemeColors = {
  builderBg: colors.grey[2],
  // TODO add modes here i.e.:
  // modes: { dark: { builderBg: ... }, light: { builderBg: ... } }
  modes: {
    light: {
      builderBg: colors.grey[6],
    },
    dark: {
      builderBg: colors.grey[11],
    },
  },
};

// Scale object def
export interface Scales {
  xl: {
    [key: string]: string;
  };
  lg: {
    [key: string]: string;
  };
  md: {
    [key: string]: string;
  };
  sm: {
    [key: string]: string;
  };
}

// Scale object
export const scales: Scales = {
  xl: {
    panel: "34rem",
  },
  lg: {
    panel: "28rem",
  },
  md: {
    panel: "28rem",
  },
  sm: {
    panel: "22em",
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
  padding: {
    [key: string]: string;
  };
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
    deleteBtn: "#44336",
    deleteBtnHover: "#81353B",
    doneBtn: "#31443F",
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
    buttonLarge: "1.125rem",
    dashboardHeader: "2.125rem",
    dashboardText: "1rem",
    dashboardTextSmall: "0.875rem",
    sliderSetting: "1.5rem",
  },
  padding: {
    base: "1rem",
    halfBase: "0.5rem",
    doubleBase: "2rem",
    app: "5rem",
  },
  margin: {
    base: "1rem",
    halfBase: "0.5rem",
    doubleBase: "2rem",
  },
  borders: {
    dashboard: "1px solid rgb(255,255,255,0.1)",
  },
  borderRadius: {
    small: "0.5rem",
    xsmall: "0.25rem",
  },
  width: {
    sidePanelLg: "550px",
    panel: "550px",
  },
  flex: {
    column: "display: flex; flex-direction: column;",
    row: "display: flex; flex-direction: row;",
    centered: "justify-content: center; align-items: center;",
    grow: "flex-grow: 1;",
  },
};
