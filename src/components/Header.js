import React from 'react';
import { css } from 'glamor';
import Globals from '../utils/Globals';

import Logo from './Logo';
import Infos from './Infos';
import Title from './Title';
import Ingresso from './Ingresso';

import vaporWave from '../media/images/vaporwave.jpg';

const styles = {
  container: css({
    background: `url(https://i1.wp.com/wallur.com/wp-content/uploads/2016/12/synthwave-background-7.jpg?fit=1920%2C1080) no-repeat bottom / cover`,
    backgroundColor: 'black',
    color: Globals.colors.primary,
    width: '100%',
    minWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'space-between',
    '@media(max-width: 720px)': {
      backgroundSize: 'cover',
      backgroundPosition: '30% 100px',
    },
  }),
};

const Header = () =>
  <div {...styles.container}>
    <Title />
    <Ingresso />
    <Logo />
    <Infos />
  </div>;
//<Ingresso />

export default Header;
