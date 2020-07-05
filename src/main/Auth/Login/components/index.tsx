import styled from "styled-components";
export const WelcomeBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-image: url(./img/geometric.jpg);
  background-size: cover;
  z-index: -1;
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (-o-min-device-pixel-ratio: 2/1),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-image: url(./img/geometric-retina.jpg);
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export const LoginWrap = styled.div``;

export const MainLogo = styled.div`
  h1 {
    font-size: 6rem;
    color: #fff;
    font-family: ${(props) => props.theme.fonts.brand};
    text-align: center;
    margin-top: 0;
  }
`;

export const LoginAction = styled.div`
  padding: 20px;
  border-radius: 10px;
  color: #fff;
  background: rgb(0, 0, 0, 0.5);
  text-align: center;
  min-width: 500px;
  max-width: 100%;

  p {
    color: #fff;
    font-size: 1.25rem;
    font-family: ${(props) => props.theme.fonts.main};
    font-weight: 400;
  }
`;
