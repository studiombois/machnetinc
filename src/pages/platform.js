import React from 'react';

import { Layout, SEO } from '@ui';

import { Header } from 'components/theme';
import { Usecase } from 'components/usecase/usecase';

export default () => (
  <Layout>
    <SEO />
    <Usecase/>
  </Layout>
);