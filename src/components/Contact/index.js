import React from 'react';
import styled from 'styled-components';

import { Title, SubTitle } from '../Title';
import Globals from '../../utils/Globals';

import Slack from './Slack';
import Github from './Github';
import Facebook from './Facebook';
import Twitter from './Twitter';

const Container = styled.div`
  background-color: ${Globals.colors.white};
  width: 100%;
  text-align: center;
`;

const Link = styled.a`
  color: ${Globals.colors.primary};
`;

const Contact = () => (
  <Container>
    <Title title="Contato" />
    <SubTitle title="Acesse nossas redes" />

    <div>
      <Slack />
      <Twitter />
      <Github />
      <Facebook />

      <p>
        Envie sua
        {' '}
        <i lang="en" className="notranslate">
          Pull Request
        </i>
        . Ajude a manter esta página:
        <br />
        <Link
          target="_blank"
          href={Globals.contacts.repo}
          rel="noopener noreferrer"
        >
          {Globals.contacts.repo}
        </Link>
      </p>
      <p>
        E-mail:
        <br />
        <Link
          href={`mailto:${Globals.contacts.email}`}
          rel="noopener noreferrer"
        >
          {Globals.contacts.email}
        </Link>
      </p>
    </div>
  </Container>
);

export default Contact;
