import React from 'react';

import { Layout, SEO, Container } from '@ui';

import PageHeader from 'components/page/page-title';
import Services from 'components/services/services';
import InstantAccVerification from 'components/services/details/instant-account-verification';

export default () => (
  <Layout>
    <SEO />
    <PageHeader title=""/>
    <Container>
      <InstantAccVerification/>
    </Container>
    <Services currentPage="Instant account verification" />
  </Layout>
);