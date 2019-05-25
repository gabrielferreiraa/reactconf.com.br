import React from 'react';
import styled from 'styled-components';
import Globals from '../utils/Globals';
import meetups from '../utils/Meetups';
import Button from './Button';
import { Title } from './Title';

const Container = styled.div`
  background: ${Globals.colors.main};
`;

const Buttons = styled.div`
  padding: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const MeetupButton = styled(Button)`
  margin: 10px;

  @media screen and (max-width: 580px) {
    width: 50%;
  }
`;

const Meetups = () => (
  <Container>
    <Title title="Meetups no Brasil" />
    <Buttons>
      {meetups.map(meetup => (
        <MeetupButton href={meetup.link} light>
          {meetup.name}
        </MeetupButton>
      ))}
    </Buttons>
  </Container>
);

export default Meetups;
