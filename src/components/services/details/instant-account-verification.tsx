import React from 'react';

import {
  Box,
  Title,
  Table,
  Column,
  Loader,
  Wrapper,
  Content,
  BoxFooter,
  LinkYourBank,
} from './styles';
import { Container } from '@ui';

import DollarCheck from 'assets/icons/dollar-check.svg';
import ArrowLeft from 'assets/icons/arrow-forward.svg';

const renderExampleTable = () => (
  <Table>
    <table>
      <tr>
        <td>Names</td>
        <td style={{ textAlign: 'right' }}>Alberta Bobbeth Charleson</td>
      </tr>
      <tr>
        <td>Addresses</td>
        <td style={{ textAlign: 'right' }}>
          2992 Cameron Road
          <br />
          Malakoff, NY
          <br />
          14236, US
          <br />
          2493 Leisure Lane
          <br />
          San Matias, CA
          <br />
          93405-2255, US
        </td>
      </tr>
      <tr>
        <td>Phone numbers</td>
        <td style={{ textAlign: 'right' }}>
          1112223333
          <br />
          1112224444
          <br />
          1112225555
        </td>
      </tr>
      <tr>
        <td>Emails</td>
        <td style={{ textAlign: 'right' }}>
          accountholder0@example.com
          <br />
          accountholder1@example.com
          <br />
          extraordinary@reallylonghostname.com
        </td>
      </tr>
      <tr>
        <td colSpan={2} style={{ textAlign: 'right' }}>
          $500.00
        </td>
      </tr>
      <tr>
        <td colSpan={2} style={{ textAlign: 'right' }}>
          $4,656.44
        </td>
      </tr>
      <tr>
        <td colSpan={2} style={{ textAlign: 'right' }}>
          Credit
        </td>
      </tr>
    </table>
  </Table>
);

const renderLinkYourBank = () => (
  <LinkYourBank>
    <p>Link your bank</p>
    <Loader width="100%" />
    <Loader width="100%" />
    <Loader width="60%" />
    <Box>
      <p>Recommended</p>
      <h1>Instant</h1>
      <BoxFooter>
        Use your online login to connect your account
        <img src={ArrowLeft} alt="arrow" />
      </BoxFooter>
    </Box>
  </LinkYourBank>
);

const InstantAccountVerification = () => {
  return (
    <Wrapper id="details">
      <Title>
        <h1>Instant Account Verification</h1>
      </Title>
      <p>
        Instantly authenticate bank accounts. Protect against overdraft and NSF
        fees by having visibility into available funds. Retrieve transaction
        data, including enhanced geolocation, merchant, and category
        information.
      </p>
      <Content>
        <Column>
          {renderLinkYourBank()}
          Instantly authenticate bank accounts for payments for ACH transfers
          from any bank or credit union in the US.
        </Column>
        <Column>
          {renderExampleTable()}
          Real-time balance check to protect against overdraft and NSF fees by
          having visibility into available funds before transfer (US and
          Canada).
        </Column>
      </Content>
    </Wrapper>
  );
};

export default InstantAccountVerification;
