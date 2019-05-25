import React from 'react';
import styled from 'styled-components';
import Button from './Button';

import globals from '../utils/globals';
import { Title, SubTitle } from './Title';

const Container = styled.div`
  background-color: ${globals.colors.secondary};
  width: 100%;
  padding: 15px;
  text-align: center;
`;

const BuyTicket = styled(Button)`
  margin: 20px auto;
  display: block;
  width: fit-content;
`;

const BuyTickets = () => (
  <Container>
    <Title title={globals.date.full} />
    <SubTitle title={`${globals.date.weekDay}, das ${globals.date.hour}`} />

    <BuyTicket href={globals.buyTicketLink} light medium>
      Ingressos aqui
    </BuyTicket>
  </Container>
);

export default BuyTickets;
