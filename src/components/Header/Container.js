import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Globals from '../../utils/Globals';

import backgroundImage from '../../media/images/vaporwave.jpg';

const StyledContainer = styled.div`
  background: url(${backgroundImage}) no-repeat center / cover;
  background-color: #220132;
  color: ${Globals.colors.primary};
  width: 100%;
  min-width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;

  @media (max-width: 480px) {
    background-position: left;
  }
`;

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
