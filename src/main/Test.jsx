import React, { useState } from "react";
import styled from "styled-components";
import CustomScroller from "react-custom-scroller";

const Test = () => {
  const [dashSideRight, setDashSide] = useState(true);

  return (
    <Outcont>
      <Nav>Navigation</Nav>
      <CustomScroller>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet
        consectetur adipiscing elit pellentesque. Pellentesque eu tincidunt
        tortor aliquam. Semper eget duis at tellus at urna condimentum mattis
        pellentesque. Volutpat blandit aliquam etiam erat velit. Dictum sit amet
        justo donec. Tellus cras adipiscing enim eu. Et ligula ullamcorper
        malesuada proin libero nunc consequat interdum. Auctor eu augue ut
        lectus arcu bibendum at varius vel. Nec sagittis aliquam malesuada
        bibendum. Pellentesque id nibh tortor id aliquet. Tristique risus nec
        feugiat in fermentum posuere. Vitae suscipit tellus mauris a diam
        maecenas. Quam elementum pulvinar etiam non quam lacus suspendisse
        faucibus interdum. Leo in vitae turpis massa sed elementum. Elit eget
        gravida cum sociis natoque penatibus et magnis. Etiam erat velit
        scelerisque in dictum. Sed id semper risus in hendrerit. Sodales neque
        sodales ut etiam sit amet nisl purus in. Ac ut consequat semper viverra
        nam libero justo laoreet sit. Vitae tempus quam pellentesque nec. Id
        nibh tortor id aliquet lectus proin. Amet mattis vulputate enim nulla
        aliquet porttitor lacus luctus accumsan. Duis convallis convallis tellus
        id interdum velit laoreet id donec. Nunc aliquet bibendum enim facilisis
        gravida. Quisque sagittis purus sit amet volutpat consequat. Vitae
        auctor eu augue ut lectus arcu bibendum at. Condimentum id venenatis a
        condimentum vitae sapien pellentesque. Accumsan tortor posuere ac ut.
        Feugiat scelerisque varius morbi enim. Vestibulum morbi blandit cursus
        risus at ultrices. Leo vel fringilla est ullamcorper eget nulla. Nibh
        cras pulvinar mattis nunc sed blandit libero volutpat sed. Ut tristique
        et egestas quis ipsum suspendisse ultrices gravida dictum. Pellentesque
        elit eget gravida cum. Aliquet eget sit amet tellus cras. Diam maecenas
        sed enim ut sem viverra aliquet eget sit. Facilisis volutpat est velit
        egestas dui id ornare arcu odio. Sit amet justo donec enim. Adipiscing
        elit ut aliquam purus sit. Auctor eu augue ut lectus. Morbi tempus
        iaculis urna id volutpat lacus laoreet non curabitur. Duis ut diam quam
        nulla porttitor massa id. Etiam erat velit scelerisque in. Molestie nunc
        non blandit massa enim. Posuere urna nec tincidunt praesent semper
        feugiat. Sit amet tellus cras adipiscing enim eu turpis egestas pretium.
        Nunc mattis enim ut tellus elementum sagittis vitae. Faucibus vitae
        aliquet nec ullamcorper sit amet. Tellus rutrum tellus pellentesque eu
        tincidunt. Egestas pretium aenean pharetra magna. Felis bibendum ut
        tristique et egestas quis. Netus et malesuada fames ac turpis egestas.
        Tellus orci ac auctor augue mauris augue neque gravida in. Neque ornare
        aenean euismod elementum nisi quis eleifend quam. Id interdum velit
        laoreet id donec. Tellus cras adipiscing enim eu. Euismod quis viverra
        nibh cras pulvinar mattis nunc sed. Turpis cursus in hac habitasse
        platea dictumst quisque sagittis purus. Malesuada nunc vel risus commodo
        viverra maecenas accumsan. Faucibus turpis in eu mi. Vestibulum mattis
        ullamcorper velit sed ullamcorper. Tincidunt augue interdum velit
        euismod in. Non sodales neque sodales ut etiam sit amet nisl. Vel
        facilisis volutpat est velit egestas. Ac placerat vestibulum lectus
        mauris ultrices. Nisi scelerisque eu ultrices vitae auctor eu. Diam quam
        nulla porttitor massa id neque aliquam vestibulum. Nisi lacus sed
        viverra tellus in hac habitasse platea. Ultrices in iaculis nunc sed.
        Vitae congue mauris rhoncus aenean vel elit scelerisque mauris
        pellentesque. In hac habitasse platea dictumst vestibulum rhoncus.
        Turpis egestas sed tempus urna. Hendrerit gravida rutrum quisque non
        tellus orci ac.
      </CustomScroller>
      <Footer>Footer</Footer>
    </Outcont>
  );
};

export default Test;

const Outcont = styled.div`
  width: 600px;
  margin: 0 auto;
  height: 100vh;
  background: tomato;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const Nav = styled.div`
  padding: 10px;
  height: 100px;
  background: lightblue;
`;

const Content = styled.div`
  padding: 10px;
  background: lightpink;
  flex-grow: 1;
  min-height: 0;
  overflow: auto;
`;

const Footer = styled.div`
  padding: 10px;
  background: lightgreen;
`;
