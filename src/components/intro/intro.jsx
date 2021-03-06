import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Container } from '@ui';
import { Header } from 'components/theme';

import {
  Wrapper,
  Details,
  Thumbnail,
  LearnMore,
  Background,
  RequestDemo,
  IntroWrapper,
  WaveBackground,
} from './styles';

import Platform from 'assets/img/platform.png';
import Wave from 'assets/illustrations/wave.svg';
import ArrowDown from 'assets/icons/arrow-down-outline.svg';
import ArrowForwrd from 'assets/icons/arrow-forward-outline.svg';

export const Intro = () => (
  <Wrapper>
    <Background>
      <Header variant="light" />
      <IntroWrapper as={Container}>
        <Details>
          <h1>Unified API for US domestic and cross border payments</h1>
          <p>Regulatory Compliance Program • ACH & Cards Payments • Global Payouts</p>
          <RequestDemo as={AnchorLink} href="#contact">
            Request Demo
              <img src={ArrowForwrd} width="22" alt="request demo" />
          </RequestDemo>
          <LearnMore as={AnchorLink} href="#services">
            Learn More
              <img src={ArrowDown} width="22" alt="learn more" />
          </LearnMore>
        </Details>
        <Thumbnail>
          <img src={Platform} alt="" />
        </Thumbnail>
      </IntroWrapper>
    </Background>
    <WaveBackground src={Wave} alt="wave" />
  </Wrapper>
);

