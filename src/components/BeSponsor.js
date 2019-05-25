import React from 'react';
import styled from 'styled-components';
import globals from '../utils/globals';
import Button from './Button';

const Container = styled.div`
  background: ${globals.colors.white};
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const BeSponsor = () => (
  <Container>
    <Button href={`mailto:${globals.contacts.email}`}>
      Seja um patrocinador
    </Button>
  </Container>
);

export default BeSponsor;
