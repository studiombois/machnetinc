import React from 'react';

import { Layout, SEO } from '@ui';

import { Services } from 'components/services/services';
import { Usecase } from 'components/usecase/usecase';
import Platform from 'components/platform/platform'

export default () => (
  <Layout>
    <SEO />
    <Platform/>
    <Services/>
    <Usecase/>
  </Layout>
);