import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Header } from 'components/theme';
import { Container, ButtonSmall } from 'ui';
import Platform from 'assets/illustrations/platform.png';

import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Super API for US domestic and cross border payments</h1>
          <p>Provide turn-key payment services using our hyper integrated API.</p>
          <ButtonSmall as={AnchorLink} href="#contact">
           Request Demo
          </ButtonSmall>
        </Details>
        <Thumbnail>
          <img src={Platform} alt="" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
