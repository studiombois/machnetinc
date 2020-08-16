import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Container } from 'ui';
import { Header } from 'components/theme';
import { Wrapper, IntroWrapper, Details, Thumbnail, RequestDemo } from './styles';

import Platform from 'assets/img/platform.png';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Unified API for US domestic and cross border payments</h1>
          <p>Regulatory Compliance Program • ACH & Cards Payments • Global Payouts</p>
          <RequestDemo as={AnchorLink} href="#contact">
            Request Demo
          </RequestDemo>
        </Details>
        <Thumbnail>
          <img src={Platform} alt="" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
