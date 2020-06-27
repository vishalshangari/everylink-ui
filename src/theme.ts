interface Theme {
  color: {
    [key: string]: string;
  };
  padding: {
    base: string;
    app: string;
  };
  margin: {
    base: string;
  };
}

const theme: Theme = {
  color: {
    white: "#fff",
    black: "#000",
  },
  padding: {
    base: "1rem",
    app: "5rem",
  },
  margin: {
    base: "1rem",
  },
};

export default theme;
