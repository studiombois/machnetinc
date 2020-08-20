import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Container } from '@ui';
import { Header } from 'components/theme';

import {
  Intro,
  Wrapper,
  Thumbnail,
  LearnMore,
  Background,
  WaveBackground,
} from './styles';

import Client from 'assets/img/client.png';
import Wave from 'assets/illustrations/wave.svg';
import Integrate from 'assets/icons/integrate.svg';
import ArrowDown from 'assets/icons/arrow-down-outline.svg';

const Platform = () => {
  return (
    <Wrapper>
      <Background>
        <Header variant="light" />
        <Intro as={Container}>
          <img src={Integrate} alt="API" />
          <h1>Our Platform</h1>
          <p>
            Hyper integrated API to address your <u>domestic</u> and{' '}
            <u>cross-border</u> payment requirements.
          </p>
          <LearnMore as={AnchorLink} href="#services">
            Learn More
            <img src={ArrowDown} width="22" alt="learn more" />
          </LearnMore>
        </Intro>
      </Background>
      <WaveBackground src={Wave} alt="wave" />
    </Wrapper>
  );
};

export default Platform;
