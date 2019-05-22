import React from 'react';
import PropTypes from 'prop-types';
import Globals from '../../utils/Globals';
import styled from 'styled-components';

const disabledStyle = `
    background-color: ${Globals.colors.gray};
    color: ${Globals.colors.lightGray};
    cursor: initial;
`;

const StyledButton = styled.a`
  color: ${Globals.colors.background};
  padding: 10px 30px;
  background: #fa46ff;
  border: 2px solid ${Globals.colors.transparent};
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  font-size: 1em;
  border-radius: 22px;
  transition: background-color 200ms ease;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => !!props.disabled && disabledStyle};

  ${props =>
    !props.disabled &&
    `
        &:hover {
            transition: background-color 200ms ease;
            background-color: ${Globals.colors.transparent};
            color: #FA46FF;
            border: 2px solid #FA46FF;
        }
    `};
`;

const Button = ({ children, ...props }) =>
  <StyledButton {...props} rel="noopener noreferrer">
    {children}
  </StyledButton>;

Button.defaultProps = {
  disabled: false,
  target: '_blank',
  href: 'javascript:void(0)',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  disabled: PropTypes.bool,
  target: PropTypes.string,
};

export default Button;
