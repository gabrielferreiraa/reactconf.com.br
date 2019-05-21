import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import Name from './Name';
import Globals from '../../utils/Globals';

const StyledSpeaker = styled.div`
  width: 230px;
  max-width: 100%;
  padding: 0;
  background-color: ${Globals.colors.transparent};
  border-radius: 0;
  margin: 10px 10px 4em;
`;

const Speaker = ({ speaker, handleSpeakerClick }) =>
  <StyledSpeaker>
    <Avatar speaker={speaker} handleSpeakerClick={handleSpeakerClick} />
    <Name name={speaker.name} github={speaker.github} />
    {/* <p {...styles.locale}>
      {speaker.worksIn &&
        speaker.worksIn.length &&
        <a
          href={speaker.worksLink}
          rel="noopener noreferrer"
          target="_blank"
          className="notranslate"
        >
          @{speaker.worksIn}
        </a>}
    </p>
    <h4 {...styles.theme} className="notranslate">
      <a href={speaker.talk ? speaker.talk : "javascript:void(0)"}>
        {speaker.theme}
      </a>
    </h4> */}
  </StyledSpeaker>;

export default Speaker;
