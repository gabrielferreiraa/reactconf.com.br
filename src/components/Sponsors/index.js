import React from 'react';
import styled from 'styled-components';
import sponsors from '../../utils/Sponsors';

import Text from '../Text';
import Cards from './Cards';
import Card from './Card';
import Container from './Container';

const TypeSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const sponsorCard = type => {
  if (sponsors[type].length) {
    return (
      <TypeSection>
        {sponsors[type].map(sponsor => (
          <Card key={type} sponsor={sponsor} type={type} />
        ))}
      </TypeSection>
    );
  }

  return false;
};

const Sponsors = () => (
  <Container>
    <Text title="Patrocínio" />

    <Cards>{Object.keys(sponsors).map(type => sponsorCard(type))}</Cards>
  </Container>
);

export default Sponsors;
