import React from 'react';
import styled from 'styled-components';

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
  margin: 0 auto;
  max-width: 1000px;
`;

const Cards = ({ children }) =>
  <StyledCards>
    {children}
  </StyledCards>;

export default Cards;
