import React from 'react';

import { Layout, SEO, Container } from '@ui';

import PageHeader from 'components/page/page-title';
import Services from 'components/services/services';
import Identity from 'components/services/details/identity';

export default () => (
  <Layout>
    <SEO />
    <PageHeader title="" />
    <Container>
      <Identity/>
    </Container>
    <Services currentPage="Identity"/>
  </Layout>
);