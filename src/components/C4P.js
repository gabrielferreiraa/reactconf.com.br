import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';
import Text from './Text';

const styles = {
  container: css({
    alignSelf: 'flex-end',
    background: '#FFFFFF',
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
    cursor: 'default',
    textDecoration: 'none',
    letterSpacing: '1.5px',
    fontSize: '22px',

    /*':hover': {
      backgroundColor: Globals.colors.transparent,
      border: `1px solid ${Globals.colors.primary}`,
      color: Globals.colors.primary,
    },*/

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
    backgroundColor: '#B281FF',
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

class TextSC4P extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="CALL FOR PAPERS" /*subtitle="SEJA UM PALESTRANTE"*/>
          {/*  <br />*/}
          <a
            target="_blank"
            rel="noopener noreferrer"
            {...styles.link}
            href="https://forms.gle/yf1fyX87Rksvi6Sb6"
            {...styles.papersbtn}
          >
            {/* <b {...styles.link}>Início em 10 de Fevereiro</b> */}
            Envie sua talk
          </a>
        </Text>
      </div>
    );
  }
}

export default TextSC4P;
