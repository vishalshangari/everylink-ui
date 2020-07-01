interface Theme {
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
  };
  flex: {
    column: string;
    row: string;
    centered: string;
  };
}

const theme: Theme = {
  color: {
    deepPurple: "#1A1423",
    ThreePercentWhite: "rgb(255,255,255,0.03)",
    TenPercentWhite: "rgb(255,255,255,0.1)",
    deepGrey: "#333333",
    darkBackground: "#090a0b",
    darkBackgroundLight: "#1c1f22",
    borderGrey: "#343A40",
    offwhite: "#CED4DA",
    offwhiteBright: "#F8F9FA",
    lightGrey: "#ADB5BD",
    lightMiddleGrey: "#495057",
    middleGrey: "#6C757D",
    deleteBtn: "#443136",
    deleteBtnHover: "#81353B",
    doneBtn: "#31443F",
    doneBtnHover: "#358262",
  },
  fonts: {
    brand: "Lobster Two",
    main: "Open Sans",
    dashSetting: "font-size: 1rem; font-weight: bold; line-height: 1rem;",
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
  },
  width: {
    sidePanelLg: "550px",
  },
  flex: {
    column: "display: flex; flex-direction: column;",
    row: "display: flex; flex-direction: row;",
    centered: "justify-content: center; align-items: center;",
  },
};

export default theme;
