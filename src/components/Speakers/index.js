import React, { useState } from 'react';
import speakers from '../../utils/Speakers';
import Container from './Container';
import Cards from './Cards';
import Speaker from './Speaker';

import Text from '../Text';
import 'react-modal-video/css/modal-video.min.css';
import ModalVideo from 'react-modal-video';

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
    <Container>
      <Text title="Palestrantes" reverse />
      <Cards>
        {speakers.map(speaker =>
          <Speaker
            key={speaker.id}
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
    </Container>
  );
};

export default Speakers;
