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
