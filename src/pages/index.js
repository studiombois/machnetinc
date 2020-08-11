import React from 'react';

import { Layout, SEO } from 'ui';
import { Home } from 'components/landing/intro/home';
import { Intro, Service, Contact, Usecase } from 'components/landing';

const App = () => (
  <Layout>
    <SEO />
    <Intro />
    <Service/>
    <Usecase />
    <Contact />
  </Layout>
);

export default App;