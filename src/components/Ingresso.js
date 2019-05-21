import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';

const styles = {
  container: css({
    alignSelf: 'flex-end',
    display: 'flex',
    '@media(max-width: 720px)': {
      alignSelf: 'flex-end',
      display: 'block',
      width: '80%',
      margin: '0 auto',
    },
  }),
  link: css({
    color: Globals.colors.background,
    padding: '10px 30px',
    background: '#FA46FF',
    border: `2px solid ${Globals.colors.transparent}`,
    cursor: 'pointer',
    fontWeight: 'lighter',
    textDecoration: 'none',
    position: 'absolute',
    top: '35px',
    right: '30px',
    fontSize: 16,
    borderRadius: 22,
    transition: 'background-color 200ms ease',
    ':not(.is-disabled):hover': {
      transition: 'background-color 200ms ease',
      backgroundColor: Globals.colors.transparent,
      color: '#FA46FF',
      border: `2px solid #FA46FF`,
    },
    '&.is-disabled': {
      backgroundColor: Globals.colors.gray,
      color: Globals.colors.lightGray,
      cursor: 'initial',
    },
    '@media(max-width: 720px)': {
      display: 'block',
      textAlign: 'center',
      position: 'relative',
      marginBottom: '20px',
      top: '0',
      right: '0',
    },
  }),
};

class Ingresso extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <a
          href={Globals.buyTicketLink}
          target="_blank"
          rel="noopener noreferrer"
          {...styles.link}
        >
          <b>Ingressos aqui</b>
        </a>
      </div>
    );
  }
}

export default Ingresso;
