import React from 'react';

import { Layout, SEO } from 'ui';
import { Intro, Service, Contact } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Service/>
    <Contact />
  </Layout>
);
