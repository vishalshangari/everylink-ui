interface Theme {
  color: {
    [key: string]: string;
  };
  fonts: {
    brand: string;
    main: string;
  };
  padding: {
    base: string;
    app: string;
  };
  margin: {
    base: string;
  };
  width: {
    sidePanelLg: string;
  };
}

const theme: Theme = {
  color: {
    white: "#fff",
    black: "#000",
  },
  fonts: {
    brand: "Lobster Two",
    main: "Open Sans",
  },
  padding: {
    base: "1rem",
    app: "5rem",
  },
  margin: {
    base: "1rem",
  },
  width: {
    sidePanelLg: "400px",
  },
};

export default theme;
