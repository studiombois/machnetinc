import React from 'react';

import { Container } from '@ui';
import ContactForm from './contact-form';

import Checkmark from 'assets/icons/checkmark.svg';

import {
  Form,
  Item,
  Wrapper,
  TabGrid,
  Details,
  GridTypo,
  Background,
  DesktopGrid,
} from './styles';

const QuickFacts = () => (
  <GridTypo>
    <h1>Utilizing Machnet's service you can:</h1>
    <Item>
      <img src={Checkmark} alt="" />
      <p>
        Provide Whitelabel domestic & cross-border payment services to your
        end-users.
      </p>
    </Item>
    <Item>
      <img src={Checkmark} alt="" />
      <p>
        Get access to a turn-key platform so you can focus on customer
        acquisition.
      </p>
    </Item>
    <Item>
      <img src={Checkmark} alt="" />
      <p>
        Mitigate the risk of fraud & returns with our build in Risk-management
        service.
      </p>
    </Item>
    <Item>
      <img src={Checkmark} alt="" />
      <p>Allow your users to send payments to 100+ countries.</p>
    </Item>
  </GridTypo>
);

export const Contact = () => (
  <Background>
    <Wrapper as={Container} id="contact">
      <h1>Contact our sales team</h1>
      <p>Fill out the form and we’ll be in touch as soon as possible.</p>
      <Form>
        <DesktopGrid>
          <QuickFacts />
        </DesktopGrid>
        <Details>
          <ContactForm />
        </Details>
        <TabGrid>
          <QuickFacts />
        </TabGrid>
      </Form>
    </Wrapper>
  </Background>
);
