import React from 'react';

import { Layout, SEO, Container } from '@ui';

import PageHeader from 'components/page/page-title';
import Services from 'components/services/services';
import BuiltInCompliance from 'components/services/details/built-in-compliance';

export default () => (
  <Layout>
    <SEO />
    <PageHeader title="" />
    <Container>
      <BuiltInCompliance/>
    </Container>
    <Services currentPage="Built-in-compliance"/>
  </Layout>
);