import React from 'react';
import styled from 'styled-components';
import Globals from '../utils/Globals';

import { Title, SubTitle } from './Title';
import Video from './Video';

const Container = styled.div`
  width: 80%;
  background: ${Globals.colors.white};
`;

const Wrapper = styled.div`
  display: flex;
  margin: 50px;

  @media screen and (max-width: 1128px) {
    flex-wrap: wrap;
  }

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

const StyledVideo = styled(Video)`
  height: 50vh;
  width: 50%;

  @media screen and (max-width: 1128px) {
    width: 100%;
  }
`;

const Texts = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin: 15px;

  @media screen and (max-width: 1128px) {
    width: 100%;
    text-align: center;
  }
`;

const Text = styled.p`
  line-height: 2;
  color: ${({ grey }) => !!grey && 'rgba(0,0,0,0.6)'};
`;

const Event = () => (
  <Container>
    <Title title="A conferência" />
    <SubTitle title="Bleeding Edge Development" />

    <Wrapper>
      <StyledVideo />
      <Texts>
        <div>
          <Text>{Globals.event.text}</Text>
          <Text grey>{Globals.event.subtitle}</Text>
        </div>
      </Texts>
    </Wrapper>
  </Container>
);

export default Event;
