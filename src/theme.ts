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
    popstar: "#B75D69",
  },
  fonts: {
    brand: "Lobster Two",
    main: "Open Sans",
  },
  fontSizes: {
    buttonLarge: "1.125rem",
    dashboardHeader: "1.125rem",
  },
  padding: {
    base: "1rem",
    halfBase: "0.5rem",
    app: "5rem",
  },
  margin: {
    base: "1rem",
  },
  borders: {
    dashboard: "1px solid rgb(255,255,255,0.1)",
  },
  width: {
    sidePanelLg: "380px",
  },
  flex: {
    column: "display: flex; flex-direction: column;",
    row: "display: flex; flex-direction: row;",
    centered: "justify-content: center; align-items: center;",
  },
};

export default theme;
