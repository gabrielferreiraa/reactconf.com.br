import React from 'react';
import styled from 'styled-components';
import globals from '../utils/globals';

const StyledVideo = styled.iframe`
  background: ${globals.colors.transparent};
  color: ${globals.colors.primary};
`;

const Video = props => (
  <StyledVideo
    {...props}
    title="Video React Conf Brasil 2018"
    width="100%"
    height="100%"
    src="https://www.youtube.com/embed/x9K78rfG3bo?controls=0&rel=0&showinfo=0"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
);

export default Video;
