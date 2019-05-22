import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Globals from '../../utils/Globals';
import Button from '../Button';

const TicketHere = styled(Button)`
  position: absolute;
  right: 35px;
  top: 35px;

  @media screen and (max-width: 720px) {
    position: relative;
    right: inherit;
    top: inherit;
    width: 50%;
  }
`;

const TicketButton = () =>
  <TicketHere href={Globals.buyTicketLink}>Ingressos aqui</TicketHere>;

export default TicketButton;
