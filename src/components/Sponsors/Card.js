import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Globals from '../../utils/Globals';
import sizes from './sizes';

const StyledCard = styled.div`
  padding: 0;
  background-color: ${Globals.colors.white};
  border-radius: 0;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ type }) => sizes[type].card};
`;

const Logo = styled.img`
  ${({ type }) => sizes[type].logo};
`;

const Card = ({ sponsor, type }) => (
  <StyledCard type={type}>
    <a
      href={sponsor.link + Globals.utm}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Logo
        src={sponsor.avatar}
        title={sponsor.name}
        alt={sponsor.name}
        type={type}
      />
    </a>
  </StyledCard>
);

Card.propTypes = {
  sponsor: PropTypes.shape({
    id: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
};

export default Card;