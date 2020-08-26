import React from 'react';

import { Layout, SEO, Container } from '@ui';

import PageHeader from 'components/page/page-title';
import Services from 'components/services/services';
import Security from 'components/services/details/security';

export default () => (
  <Layout>
    <SEO />
    <PageHeader title="" />
    <Container>
      <Security/>
    </Container>
    <Services currentPage="Security"/>
  </Layout>
);