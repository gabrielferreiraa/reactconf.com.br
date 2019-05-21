import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Text from '../Text';
import Globals from '../../utils/Globals';

import Slack from './Slack';
import Github from './Github';
import Facebook from './Facebook';
import Twitter from './Twitter';

const styles = {
  container: css({
    alignSelf: 'flex-end',
    background: '#ffffff',
    width: '100vw',
    display: 'flex',
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  link: css({
    color: 'black',
  }),
  transition: css({
    transition: Globals.transitions.primary,
  }),
};

const Contact = () =>
  <div {...styles.container}>
    <Text title="Contato" subtitle="Acesse nossas redes">
      <Slack styles={styles} />
      <Twitter styles={styles} />
      <Github styles={styles} />
      <Facebook styles={styles} />

      <p>
        Envie sua{' '}
        <i lang="en" className="notranslate">
          Pull Request
        </i>. Ajude a manter esta página:<br />
        <a {...styles.link} target="_blank" href={Globals.contacts.repo}>
          {Globals.contacts.repo}
        </a>
      </p>
      <p>
        E-mail:<br />
        <a {...styles.link} href={`mailto:${Globals.contacts.email}`}>
          {Globals.contacts.email}
        </a>
      </p>
    </Text>
  </div>;

export default Contact;
