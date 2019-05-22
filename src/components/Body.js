import React from 'react';
import { css } from 'glamor';
import Globals from '../utils/Globals';

import Event from './Event';
import Venue from './Venue';
import Park from './Park';
import Speakers from './Speakers';
import Schedule from './Schedule';
import C4P from './C4P';
import TextSponsor from './Sponsor';
import Supporters from './Supporters';
import Promotions from './Promotions';
import BuyIngressos from './BuyIngressos';
import Contact from './Contact';
import Meetup from './Meetup';
//import AfterParty from './AfterParty';
import BeSponsor from './BeSponsor';

const styles = {
  container: css({
    display: 'flex',
    background: Globals.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
  }),
};

const App = () =>
  <div {...styles.container}>
    <Event />
    <Venue />
    {/* <Park /> */}
    <Speakers />
    {/* <Schedule /> */}
    <BuyIngressos />
    {/* <Supporters /> */}
    {/* <Promotions /> */}
    {/* <AfterParty />*/}
    <TextSponsor />
    <BeSponsor />
    <Meetup />
    <C4P />
    <Contact />
  </div>;

export default App;
