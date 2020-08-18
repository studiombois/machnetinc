import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Container } from 'ui';

import { Wrapper, Details, RequestDemo } from './styles';

export const Contact = () => (
  <Wrapper>
    <Details as={Container}>
      <h1>Provide <span>turn-key payment services</span> using our hyper integrated API.</h1>
      <RequestDemo as={AnchorLink} href="/contact">
        Request Demo
      </RequestDemo>
    </Details>
  </Wrapper>
);
