import React from 'react';
import styled from 'styled-components';

import { Layout, SEO } from '@ui';
import { Intro } from 'components/intro/intro';
import { Contact } from 'components/contact/contact';
import WhatWeProvide from 'components/services/what-we-provide';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <ServiceWrapper>
      <WhatWeProvide/>
    </ServiceWrapper>
    <Contact/>
  </Layout>
);

const ServiceWrapper = styled.div`
  margin-top: 7rem;
`;