import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Globals from '../../utils/Globals';

const StyledContainer = styled.div`
  background: ${Globals.colors.white};
  width: 100vw;
  align-items: center;

  @media (max-width: 720px) {
    align-self: auto;
  }
`;

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
