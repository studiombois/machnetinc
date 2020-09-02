import React from 'react';

import {
  Box,
  Title,
  Column,
  Wrapper,
  Content,
  BoxFooter,
  Thumbnail,
} from './styles';
import { Container } from '@ui';

import D24Hours from 'assets/icons/24-hours.svg';
import Instant from 'assets/icons/instant.svg';
import ArrowLeft from 'assets/icons/arrow-forward.svg';

const SameDayACH = () => {
  return (
    <Wrapper id="details">
      <Title>
        <h1>Same Day ACH</h1>
      </Title>

      <Content>
        <Column>
          <Thumbnail>
            <img src={D24Hours} alt="bank" />
          </Thumbnail>
          We provide the option for both same-day and next-day ACH payments, all
          types of ACH payments, including both credits and debits, will be
          eligible for same-day processing. Only international transactions
          (IATs) and high-value transactions above $25,000 will not be eligible.
        </Column>
        <Column>
          <Thumbnail>
            <img src={Instant} alt="bank" />
          </Thumbnail>
          Real-time Account and routing number verification including balance
          check. We eliminate the old school cumbersome process of asking user’s
          to provide their account and routing number and the verification
          process via micro-deposit
        </Column>
      </Content>
    </Wrapper>
  );
};

export default SameDayACH;
