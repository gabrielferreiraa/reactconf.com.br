import React from 'react';
import styled from 'styled-components';
import Button from './Button';

import Globals from '../utils/Globals';
import { Title, SubTitle } from './Title';

const Container = styled.div`
  background-color: ${Globals.colors.secondary};
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
    <Title title={Globals.date.full} />
    <SubTitle title={`${Globals.date.weekDay}, das ${Globals.date.hour}`} />

    <BuyTicket href={Globals.buyTicketLink} light medium>
      Ingressos aqui
    </BuyTicket>
  </Container>
);

export default BuyTickets;
