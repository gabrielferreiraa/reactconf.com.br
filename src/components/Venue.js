import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { css } from 'glamor';

import Globals from '../utils/Globals';
import imgTheater from '../media/images/teatro_apcd.jpeg';
import Text from './Text';

import Button from './Button';

const styles = {
  container: css({
    alignSelf: 'flex-end',
    color: Globals.colors.white,
    background: Globals.colors.secondary,
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
  evnts: css({
    margin: '0 auto 20px auto',
  }),
};

// class TextVenue extends PureComponent {
//   render() {
//     return (
//       <div {...styles.container}>
//         <Text
//           title="Local"
//           subtitle={`${Globals.location.locale}, ${Globals.location.city}`}
//         >
//           <img
//             src={imgTheater}
//             alt={Globals.location.locale}
//             title={Globals.location.locale}
//           />
//           <small {...styles.small}>Foto: Divulgação</small>
// <Button href={Globals.contacts.maps} light>
//   {Globals.location.address}, São Paulo - SP
// </Button>
//         </Text>
//       </div>
//     );
//   }
// }

const Wrapper = styled.div`
  display: block;
  width: 100%;
  position: relative;
  height: 400px;
  background: url(http://www.apcd.org.br/assets/uploaded/produtos/973262201ab2573b28d8bb0c172fb213.jpg)
    fixed no-repeat center 50% / cover;

  &:after {
    content: '';
    background: linear-gradient(
      rgba(20, 167, 248, 0.35),
      rgba(5, 47, 70, 0.91)
    );
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
  }
`;

const Locale = styled.div`
  z-index: 2;
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
`;

const TextVenue = () =>
  <Wrapper>
    <Locale>
      <Text
        title="Local"
        subtitle={`${Globals.location.locale}, ${Globals.location.city}`}
      />
      <Button href={Globals.contacts.maps} light>
        {Globals.location.address}, São Paulo - SP
      </Button>
    </Locale>
  </Wrapper>;

export default TextVenue;
