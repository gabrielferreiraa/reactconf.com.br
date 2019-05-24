import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';

import Globals from './utils/Globals';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: ${Globals.fonts.default};
    background: ${Globals.colors.transparent};
    overflow-x: hidden;
  }
`;

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Header />
    <Body />
    <Footer />
  </Fragment>
);

export default App;
