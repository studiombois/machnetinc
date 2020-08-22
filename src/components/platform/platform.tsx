import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Container } from '@ui';
import { Header } from 'components/theme';

import {
  Tab,
  Intro,
  Mobile,
  Wrapper,
  Thumbnail,
  LearnMore,
  Background,
  IntroWrapper,
  WaveBackground,
} from './styles';

import TabView from 'assets/img/tab.svg';
import MobileView from 'assets/img/mobile.gif';
import Wave from 'assets/illustrations/wave.svg';
import ArrowDown from 'assets/icons/arrow-down-outline.svg';

const Platform = () => {
  return (
    <Wrapper>
      <Background>
        <Header variant="light" />
        <IntroWrapper as={Container}>
          <Intro as={Container}>
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
          <Thumbnail>
            <Tab src={TabView} alt="tab" />
            <Mobile src={MobileView} alt="mobile" />
          </Thumbnail>
        </IntroWrapper>
      </Background>
      <WaveBackground src={Wave} alt="wave" />
    </Wrapper>
  );
};

export default Platform;
