import React from 'react';

import { Layout, SEO, Container } from '@ui';

import PageHeader from 'components/page/page-title';

export default () => (
  <Layout>
    <SEO />
    <PageHeader title="Identity" />
    <Container>
      <p>Our real-time KYC system uses a multi-layered process to access thousands of data sources containing billions of public records to instantly validate an identity. We are able to verify identities using just the customer’s name and address, so the users are comfortable with the amount of information they are required to share. That means there is no need for customers to disclose typical identity documents (like driver’s licenses or other photo ID cards) or more personal information and data  (like social security numbers or date of birth), which is information that can put people at risk for identity theft and fraudsters if mishandled or unsecured.</p>
    </Container>
  </Layout>
);