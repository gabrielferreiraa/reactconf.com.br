import React from "react";
import styled, { keyframes } from "styled-components";

import Globals from "../utils/Globals";
import theater from "../media/images/theater_apcd.jpg";
import { Title, SubTitle } from "./Title";

import Button from "./Button";

const move = keyframes`
  from {
    background-position: right;
  }

  to {
    background-position: left;
  }
`;

const Wrapper = styled.div`
  display: block;
  width: 100%;
  position: relative;
  height: 400px;
  background: url(${theater}) fixed no-repeat;
  background-size: cover;
  animation: ${move} 15s linear infinite alternate;
  will-change: background-position;

  &:after {
    content: "";
    background: linear-gradient(
      rgba(20, 167, 248, 0.35),
      rgba(5, 47, 70, 0.91)
    );
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
  }
`;

const Locale = styled.div`
  z-index: 2;
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
`;

const TextVenue = () => (
  <Wrapper>
    <Locale>
      <Title title="Local" light />
      <SubTitle
        title={`${Globals.location.locale}, ${Globals.location.city}`}
        light
      />

      <Button href={Globals.contacts.maps} light>
        {Globals.location.address}, São Paulo - SP
      </Button>
    </Locale>
  </Wrapper>
);

export default TextVenue;
