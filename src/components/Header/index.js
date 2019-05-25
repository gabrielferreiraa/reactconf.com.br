import React from 'react';

import Logo from './Logo';
import Container from './Container';
import TicketButton from './TicketButton';
import Title from './Title';
import Infos from './Infos';

const Header = () => (
  <Container>
    <Title />
    <TicketButton />
    <Logo />
    <Infos />
  </Container>
);

export default Header;
