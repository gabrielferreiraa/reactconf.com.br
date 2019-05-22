import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  background: #fff;
  width: 100vw;
  align-items: center;

  @media (max-width: 720px) {
    align-self: auto;
  }
`;

const Container = ({ children }) =>
  <StyledContainer>
    {children}
  </StyledContainer>;

export default Container;
