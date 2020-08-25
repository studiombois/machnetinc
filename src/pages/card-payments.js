import React from 'react';

import { Layout, SEO, Container } from '@ui';

import PageHeader from 'components/page/page-title';
import Services from 'components/services/services';
import CardPayments from 'components/services/details/card-payments';

export default () => (
  <Layout>
    <SEO />
    <PageHeader title="" />
    <Container>
      <CardPayments/>
    </Container>
    <Services currentPage="Card Payments"/>
  </Layout>
);