import React from 'react';

import {
  Box,
  Title,
  Column,
  Wrapper,
  Content,
  BoxFooter,
  BankNetwork,
} from './styles';
import { Container } from '@ui';

import Bank from 'assets/img/bank-network.png';
import ArrowLeft from 'assets/icons/arrow-forward.svg';

const SameDayACH = () => {
  return (
    <Wrapper id="details">
      <Title>
        <h1>Same Day ACH</h1>
      </Title>

      <Content>
        <Column>
          <BankNetwork>
            <img src={Bank} alt="bank" />
          </BankNetwork>
          We provide the option for both same-day and next-day ACH payments, all
          types of ACH payments, including both credits and debits, will be
          eligible for same-day processing. Only international transactions
          (IATs) and high-value transactions above $25,000 will not be eligible.
        </Column>
        <Column>
          <Box
            style={{
              maxWidth: '400px',
              marginTop: '0',
              boxShadow: '0px 4px 10px #18181873',
            }}
          >
            <p>Recommended</p>
            <h1>Instant</h1>
            <BoxFooter>
              Use your online login to connect your account
              <img src={ArrowLeft} alt="arrow" />
            </BoxFooter>
          </Box>
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
