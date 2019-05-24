import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { css } from 'glamor';
import Globals from '../utils/Globals';
import meetups from '../utils/Meetups';
import Button from './Button';

import Text from './Text';

const styles = {
  container: css({
    alignSelf: 'flex-end',
    background: Globals.colors.main,
    // width: '100vw',
    display: 'flex',
    paddingBottom: 30,
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  link: css({
    color: Globals.colors.main,
    fontSize: 20,
    borderRadius: 4,
    padding: '10px 20px',
    backgroundColor: Globals.colors.white,
    border: `1px solid ${Globals.colors.transparent}`,
    display: 'inline-block',
    margin: '0.5em',
    textDecoration: 'none',
    ':hover': {
      backgroundColor: Globals.colors.transparent,
      border: `1px solid ${Globals.colors.white}`,
      color: Globals.colors.white,
    },
    '@media(max-width: 720px)': {
      minWidth: '80%',
    },
  }),
};

const MeetupButton = styled(Button)`
  margin: 10px;
`;

class TextMeetup extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="Meetups no Brasil">
          {meetups.map(meetup => (
            <MeetupButton href={meetup.link} light>
              {meetup.name}
            </MeetupButton>
          ))}
        </Text>
      </div>
    );
  }
}

export default TextMeetup;
