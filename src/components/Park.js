import React from 'react';
import styled from 'styled-components';
import Globals from '../utils/Globals';

import { Title, SubTitle } from './Title';
import Button from './Button';

const Container = styled.div`
  background: ${Globals.colors.main};
  width: 100%;
  text-align: center;
`;

const ParkAddress = styled(Button)`
  margin: 20px auto;
  display: block;
  width: fit-content;
`;

const ParkName = styled.p`
  font-weight: bold;
  font-size: 1.3em;
`;

const Park = () => !!Globals.park && (
<Container>
  <Title title="Estacionamento" />
  <SubTitle title="Estacione em nosso Parceiro" />

  <div>
    <ParkName>
      {`${Globals.park.name} - ${Globals.park.price} das ${
        Globals.park.hour
      }`}
    </ParkName>
    <p>{!!Globals.park.phone && `Telefone: ${Globals.park.phone}`}</p>
    <ParkAddress href={Globals.park.googleMapsLink} light>
      {Globals.park.fullAddress}
    </ParkAddress>
  </div>
</Container>
);

export default Park;
