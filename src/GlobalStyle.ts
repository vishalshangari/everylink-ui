import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        box-sizing: border-box;
        @media (max-width: 27.5em) {
            .MuiPaper-root {
                width: 80%;
            }
        }
          
    }

    .MuiPaper-root {
      background-color: transparent;
    }

    body {
      background: #121416;
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    }
    button {
        margin: 0;
        padding: 0;
    }
    @keyframes fadein {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    @keyframes fadein {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    /* Dashboard action panel tooltips */
/* 
  .rc-tooltip {
    font-size: 1rem;
  } */

  .rc-tooltip {
    opacity: 1;
  }

  .rc-tooltip-inner {
    background-color: #343A40;
    font-size: 1rem;
  }

  div[class^=".rc-tooltip"], div[class*=""] {
    border-color: #343A40;
  }

`;
