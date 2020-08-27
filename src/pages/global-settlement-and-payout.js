import React from 'react';

import { Layout, SEO, Container } from '@ui';

import PageHeader from 'components/page/page-title';
import Services from 'components/services/services';
import GlobalSettlementAndPayout from 'components/services/details/global-settlement-and-payout';

export default () => (
  <Layout>
    <SEO />
    <PageHeader  />
    <Container>
      <GlobalSettlementAndPayout/>
    </Container>
    <Services currentPage="Global settlement & Payout"/>
  </Layout>
);