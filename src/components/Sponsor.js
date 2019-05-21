import React from 'react';
import { css } from 'glamor';
import Globals from '../utils/Globals';
import { seniors, plenos, juniors, padawans } from '../utils/Sponsors';
import Text from './Text';

const styles = {
  container: css({
    background: Globals.colors.white,
    width: '100vw',
    alignItems: 'center',
    paddingTop: 20,
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  link: css({
    color: '#666666',
  }),
  card: css({
    width: 300,
    height: 150,
    '@media(min-width: 721px)': {
      height: 200,
    },
    // maxWidth: '100%',
    padding: '0',
    backgroundColor: Globals.colors.white,
    borderRadius: 0,
    margin: 10,
    '> a > img': {
      '.pleno': {
        maxWidth: 300,
        maxHeight: 100,
        paddingTop: 50,
      },
      '.junior': {
        maxWidth: 200,
        maxHeight: 100,
        paddingTop: 30,
      },
      maxWidth: 150,
      maxHeight: 100,
      margin: '0 auto',
      display: 'block',
    },
  }),
  cards: css({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: 1000,
    margin: '30px auto',
  }),
};

const SponsorCard = ({ data, type }) =>
  <div {...styles.cards}>
    {data.map(sponsor =>
      <div key={sponsor.id} {...styles.card}>
        <a
          href={sponsor.link + Globals.utm}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={sponsor.avatar}
            title={sponsor.name}
            alt={sponsor.name}
            className={type}
          />
        </a>
      </div>,
    )}
  </div>;

const Seniors = ({ data }) => <SponsorCard data={data} type="senior" />;
const Plenos = ({ data }) => <SponsorCard data={data} type="pleno" />;
const Juniors = ({ data }) => <SponsorCard data={data} type="junior" />;
const Padawans = ({ data }) => <SponsorCard data={data} type="padawan" />;

const Sponsors = () =>
  <div {...styles.container}>
    <Text title="Patrocínio" />
    {seniors.length && <Seniors data={seniors} />}
    {plenos.length && <Plenos data={plenos} />}
    {juniors.length && <Juniors data={juniors} />}
    {padawans.length && <Padawans data={padawans} />}
  </div>;

export default Sponsors;
