import React from 'react';
import styled from 'styled-components';

import globals from '../../utils/globals';
import Button from '../Button';

const TicketHere = styled(Button)`
  position: absolute;
  right: 35px;
  top: 35px;

  @media screen and (max-width: 480px) {
    position: relative;
    right: inherit;
    top: inherit;
    width: 50%;
  }
`;

const TicketButton = () => (
  <TicketHere href={globals.buyTicketLink}>Ingressos aqui</TicketHere>
);

export default TicketButton;
