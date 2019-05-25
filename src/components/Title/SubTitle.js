import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Globals from '../../utils/Globals';

const StyledSubTitle = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h3`
  font-size: 1.78em;
  font-weight: lighter;
  color: ${({ light }) => (light ? Globals.colors.white : Globals.colors.primary)};
`;

const SubTitle = ({ title, ...props }) => (
  <StyledSubTitle>
    <Text {...props}>{title}</Text>
  </StyledSubTitle>
);

SubTitle.defaultProps = {
  light: false,
};

SubTitle.propTypes = {
  title: PropTypes.string.isRequired,
  light: PropTypes.bool,
};

export default SubTitle;
