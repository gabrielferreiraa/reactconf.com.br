import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { css } from 'glamor';
import Button from './Button';

import Globals from '../utils/Globals';
import Text from './Text';

const styles = {
  container: css({
    // alignSelf: "flex-end",
    background: '#FA46FF',
    width: '100vw',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    color: Globals.colors.white,
    // "@media(max-width: 720px)": {
    //   alignSelf: "auto"
    // }
  }),
  link: css({
    color: Globals.colors.background,
    border: `1px solid ${Globals.colors.transparent}`,
    padding: '10px 0',
    width: '80%',
    maxWidth: 400,
    fontSize: 22,
    display: 'inline-block',
    fontWeight: 'bold',
    margin: '0 auto 2em auto',
    background: Globals.colors.main,
    cursor: 'pointer',
    borderRadius: 4,
    textDecoration: 'none',
    ':not(.is-disabled):hover': {
      backgroundColor: Globals.colors.transparent,
      border: `1px solid ${Globals.colors.main}`,
      color: Globals.colors.main,
    },
    '&.is-disabled': {
      backgroundColor: Globals.colors.gray,
      color: Globals.colors.lightGray,
      cursor: 'initial',
    },
    '@media(max-width: 720px)': {
      display: 'block',
      textAlign: 'center',
    },
  }),
};

const BuyTicket = styled(Button)`
  margin: 20px 0 40px;
`;

class TextBuyIngressos extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text
          title={Globals.date.full}
          subtitle={`${Globals.date.weekDay}, das ${Globals.date.hour}`}
        />
        <BuyTicket href={Globals.buyTicketLink} light medium>
          Ingressos aqui
        </BuyTicket>
      </div>
    );
  }
}

export default TextBuyIngressos;
