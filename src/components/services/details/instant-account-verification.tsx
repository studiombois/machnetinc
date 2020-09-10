import React from 'react';

import { Title, Table, Column, Wrapper, Content, Thumbnail } from './styles';

import Instant from 'assets/icons/bank.svg';
import DollarCheck from 'assets/icons/dollar-check.svg';

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
          <Thumbnail>
            <img src={Instant} alt="" />
          </Thumbnail>
          Instantly authenticate bank accounts for payments for ACH transfers
          from any bank or credit union in the US.
        </Column>
        <Column>
          <Thumbnail>
            <img src={DollarCheck} alt="" />
          </Thumbnail>
          Real-time balance check to protect against overdraft and NSF fees by
          having visibility into available funds before transfer (US and
          Canada).
        </Column>
      </Content>
    </Wrapper>
  );
};

export default InstantAccountVerification;
