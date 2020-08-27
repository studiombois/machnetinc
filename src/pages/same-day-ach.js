import React from 'react';

import { Layout, SEO, Container } from '@ui';

import PageHeader from 'components/page/page-title';
import Services from 'components/services/services';
import SameDayACH from 'components/services/details/same-day-ach';

export default () => (
  <Layout>
    <SEO />
    <PageHeader  />
    <Container>
      <SameDayACH/>
    </Container>
    <Services currentPage="Same day ACH"/>
  </Layout>
);