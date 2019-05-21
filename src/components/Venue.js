import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';
import imgTheater from '../media/images/teatro_apcd.jpeg';
import Text from './Text';

const styles = {
  container: css({
    alignSelf: 'flex-end',
    color: Globals.colors.white,
    background: '#B281FF',
    width: '100vw',
    display: 'flex',
    '> img': {
      maxWidth: '100%',
    },
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  small: css({
    display: 'block',
  }),
  mediumBtn: css({
    color: '#B281FF',
    fontSize: 16,
    textAlign: 'center',
    maxWidth: 360,
    borderRadius: 4,
    padding: '10px 20px',
    backgroundColor: Globals.colors.white,
    display: 'block',
    margin: '0 auto',
    textDecoration: 'none',
  }),
  evnts: css({
    margin: '0 auto 20px auto',
  }),
};

class TextVenue extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text
          title="Local"
          subtitle={`${Globals.location.locale}, ${Globals.location.city}`}
        >
          <img src={imgTheater} alt="Teatro APCD" title="Teatro APCD" />
          <small {...styles.small}>Foto: Divulgação</small>
          <p>
            {Globals.location.address}, São Paulo - SP
          </p>
          <p>
            <a
              {...styles.mediumBtn}
              href="https://goo.gl/maps/GBi9o1mJB23UAheN8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Maps
            </a>
          </p>
        </Text>
      </div>
    );
  }
}

export default TextVenue;
