import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Globals from '../../utils/Globals';

const StyledTitle = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3em;
`;

const Text = styled.h1`
  color: ${({ light }) => (light ? Globals.colors.white : Globals.colors.primary)};
`;

const Title = ({ title, ...props }) => (
  <StyledTitle>
    <Text {...props}>{title}</Text>
  </StyledTitle>
);

Title.defaultProps = {
  light: false,
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  light: PropTypes.bool,
};

export default Title;
