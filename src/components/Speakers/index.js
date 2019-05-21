import React, { useState } from 'react';
import { css } from 'glamor';
import Globals from '../../utils/Globals';
import speakers from '../../utils/Speakers';
import Cards from './Cards';
import Speaker from './Speaker';

import Text from '../Text';
import ytIcon from '../../media/icons/ytIcon.png';
import 'react-modal-video/css/modal-video.min.css';
import ModalVideo from 'react-modal-video';

const styles = {
  container: css({
    background: '#FFF',
    width: '100vw',
    alignItems: 'center',
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  link: css({
    color: '#666666',
  }),
  locale: css({
    fontSize: '1em',
    fontWeight: 'lighter',
    textAlign: 'center',
    margin: '0 0 0.33em 0',
    '> a': {
      textDecoration: 'none',
      color: '#555',
      fontWeight: 'bold',
    },
  }),
  theme: css({
    fontSize: '1.2em',
    color: Globals.colors.subheader,
    margin: '0 0 0.33em 0',
    textAlign: 'center',
    fontWeight: 'lighter',
    '@media(max-width: 720px)': {
      fontSize: '1.4em',
    },
    '> a': {
      color: Globals.colors.secondary,
      textDecoration: 'none',
    },
    '> a:hover': {
      color: Globals.colors.subheader,
      textDecoration: 'underline',
    },
  }),
  card: css({
    width: 230,
    maxWidth: '100%',
    padding: '0',
    backgroundColor: Globals.colors.transparent,
    borderRadius: 0,
    margin: '10px 10px 4em',
    '@media(min-width: 720px)': {
      margin: '10px 10px 1em',
    },
    '@media(max-width: 720px)': {
      width: 300,
    },
    '> a': {
      overflow: 'hidden',
      textDecoration: 'none',
    },
    '> img': {
      opacity: 0.5,
    },
  }),
};

const Speakers = () => {
  const [video, setVideo] = useState('');
  const [isOpen, setOpen] = useState(false);

  const handleSpeakerClick = speaker => {
    if (!!speaker.videoId) {
      setVideo(speaker.videoId);
      setOpen(true);
    }
  };

  return (
    <div {...styles.container}>
      <Text title="Palestrantes" reverse />
      <Cards>
        {speakers.map(speaker =>
          <Speaker
            speaker={speaker}
            handleSpeakerClick={() => handleSpeakerClick(speaker)}
          />,
        )}
      </Cards>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={video}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default Speakers;
