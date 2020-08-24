import React from 'react';

import { Layout, SEO, Container } from '@ui';

import PageHeader from 'components/page/page-title';
import Identity from 'components/services/details/identity';
import Services from 'components/services/services';

export default () => (
  <Layout>
    <SEO />
    <PageHeader title="" />
    <Container>
      <Identity/>
    </Container>
    <Services/>
  </Layout>
);