import React from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';
import Text from './Text';

const styles = {
  container: css({
    alignSelf: 'flex-end',
    background: '#d9d9d9',
    width: '100vw',
    display: 'flex',
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  link: css({
    color: Globals.colors.white,
    padding: '10px 22px',
    background: Globals.colors.lightGray,
    border: `1px solid ${Globals.colors.transparent}`,
    borderRadius: 4,
    borderColor: 'transparent',
    cursor: 'pointer',
    textDecoration: 'none',
    letterSpacing: '1.5px',
    fontSize: '22px',

    '@media(max-width: 720px)': {
      display: 'block',
      textAlign: 'center',
      fontSize: '20px',
    },
  }),
  papersbtn: css({
    color: Globals.colors.white,
    fontSize: 26,
    textAlign: 'center',
    maxWidth: 300,
    borderRadius: 4,
    padding: '10px 20px',
    backgroundColor: '#00ACFF',
    border: `1px solid ${Globals.colors.white}`,
    display: 'block',
    margin: '4em auto',
    textDecoration: 'none',
    ':not(.is-disabled):hover': {
      backgroundColor: Globals.colors.white,
      border: `1px solid ${Globals.colors.main}`,
      color: Globals.colors.main,
    },
  }),
};

const C4P = () =>
  <div {...styles.container}>
    <Text title="CALL FOR PAPERS">
      <a
        target="_blank"
        rel="noopener noreferrer"
        {...styles.link}
        href={Globals.contacts.c4p}
        {...styles.papersbtn}
      >
        Envie sua talk
      </a>
    </Text>
  </div>;

export default C4P;
