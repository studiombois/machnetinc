import React from 'react';
import styled from 'styled-components';

import { Layout, SEO } from '@ui';

import Services from 'components/services/services';
import { Usecase } from 'components/usecase/usecase';
import Platform from 'components/platform/platform'

export default () => (
  <Layout>
    <SEO />
    <Platform/>
    <ServiceWrapper>
      <Services/>
    </ServiceWrapper>
    <Usecase/>
  </Layout>
);

const ServiceWrapper = styled.div`
  margin-top: 7rem;
  
  @media(max-width: 481px) {
    margin-top: 5rem;
  }
`;