import React from 'react';

import { Layout, SEO } from '@ui';
import { Intro } from 'components/intro/intro';
import { Contact } from 'components/contact/contact';
import WhatWeProvide from 'components/services/what-we-provide';

const App = () => (
  <Layout>
    <SEO />
    <Intro />
    <WhatWeProvide/>
    <Contact/>
  </Layout>
);

export default App;