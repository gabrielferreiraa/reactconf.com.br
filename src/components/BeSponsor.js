import React from 'react';
import styled from 'styled-components';
import Globals from '../utils/Globals';
import Button from './Button';

const Container = styled.div`
  background: ${Globals.colors.white};
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const BeSponsor = () =>
  <Container>
    <Button href={`mailto:${Globals.contacts.email}`}>
      Seja um patrocinador
    </Button>
  </Container>;

export default BeSponsor;
