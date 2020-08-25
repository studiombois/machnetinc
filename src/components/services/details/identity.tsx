import React from 'react';

import { Container } from '@ui';
import { Wrapper, Title, Content, Column } from './styles';

import Id from 'assets/icons/identity.svg';

const Identity = () => {
  return (
    <Wrapper id="details">
      <Title>
        <h1>Identity</h1>
      </Title>
      <p>
        Our real-time KYC system uses a multi-layered process to access
        thousands of data sources containing billions of public records to
        instantly validate an identity. We are able to verify identities using
        just the customer’s name and address, so the users are comfortable with
        the amount of information they are required to share. That means there
        is no need for customers to disclose typical identity documents (like
        driver’s licenses or other photo ID cards) or more personal information
        and data (like social security numbers or date of birth), which is
        information that can put people at risk for identity theft and
        fraudsters if mishandled or unsecured.
      </p>
      <Content>
        <Column>
          <h1>1</h1>
          With basic user information the system returns a result, including any
          ID verification discrepancies. Depending on the results, the user can
          be approved, failed, or escalated for enhanced verification
        </Column>
        <Column>
          <h1>2</h1>
          The user is required to submit information based on the amount of the
          transaction.
        </Column>
        <Column>
          <h1>3</h1>
          Manual verification is conducted to reduce the failure of user KYC.
        </Column>
      </Content>
    </Wrapper>
  );
};

export default Identity;
