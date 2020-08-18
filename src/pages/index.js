import React from 'react';

import { Layout, SEO } from 'ui';
import {Clients} from 'components/landing/clients/clients';
import { Intro, Service, Contact, Usecase } from 'components/landing';

const App = () => (
  <Layout>
    <SEO />
    <Intro />
    <Service/>
    <Contact/>
  </Layout>
);

export default App;