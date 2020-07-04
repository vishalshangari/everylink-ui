interface Data {
  type: string;
  textContent: string;
  appearance: {
    theme: {
      default: string;
    };
    font: string;
    color: {
      text: string;
      background: string;
    };
    character: {
      size: string;
      lineHeight: string;
      fontWeight: string;
      letterSpacing: string;
    };
  };
}

export default Data;
