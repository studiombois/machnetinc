import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Header } from 'components/theme';
import { Container, ButtonSmall } from 'ui';
import { Wrapper, IntroWrapper, Details, Thumbnail, RequestDemo } from './styles';

import Platform from 'assets/img/platform.png';
import Wave from 'assets/illustrations/wave.svg';
import intro from 'assets/illustrations/intro.svg';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Wrapper>
        <Header />
        <IntroWrapper as={Container}>
          <Details theme={theme}>
            <h1>Super API for US domestic and cross border payments</h1>
            <p>Provide turn-key payment services using our hyper integrated API.</p>
            <RequestDemo as={AnchorLink} href="#contact">
              Request Demo
            </RequestDemo>
          </Details>
          <Thumbnail>
            <img src={Platform} alt="" />
          </Thumbnail>
        </IntroWrapper>
      </Wrapper>
      {/* <img style={{ marginTop: '0px', zIndex: '-1', position: 'absolute' }} src={intro} alt="" /> */}
    </>
  );
};
