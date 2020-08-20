import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Container } from '@ui';
import ContactForm from './contact-form';

import Email from 'assets/illustrations/email.svg'

import { Wrapper, Background, Details, Thumbnail } from './styles';

export const Contact = () => (
  <Background>
    <Wrapper as={Container}>
      <Thumbnail>
        <img src={Email} alt="contact" />
      </Thumbnail>
      <Details id="contact">
        <p>Get in touch</p>
        <h1>Tell us a bit about yourself</h1>
        <ContactForm />
      </Details>
    </Wrapper>
  </Background>
);
