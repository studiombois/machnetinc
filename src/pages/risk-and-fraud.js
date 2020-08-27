import React from 'react';

import { Layout, SEO, Container } from '@ui';

import PageHeader from 'components/page/page-title';
import Services from 'components/services/services';
import RiskAndFraud from 'components/services/details/risk-and-fraud';

export default () => (
  <Layout>
    <SEO />
    <PageHeader  />
    <Container>
      <RiskAndFraud/>
    </Container>
    <Services currentPage="Risk & fraud"/>
  </Layout>
);