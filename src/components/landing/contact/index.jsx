import React from 'react';

import { Container } from 'ui';
import ContactForm from './contact-form';

import { Wrapper, Details, Thumbnail } from './styles';

export const Contact = () => (
  <Wrapper id="contact">
    <Details as={Container}>
      <h1>Demo & Pricing</h1>
      <ContactForm />
    </Details>
  </Wrapper>
);
