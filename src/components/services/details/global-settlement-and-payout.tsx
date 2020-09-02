import React from 'react';

import { Title, Column, Wrapper, Content, Thumbnail } from './styles';

import GlobalNetwork from 'assets/icons/global-network.svg';
import BusinessPayment from 'assets/icons/business-payment.svg';

const GlobalSettlementAndPayout = () => {
  return (
    <Wrapper id="details">
      <Title>
        <h1>Global Settlement & Payout</h1>
      </Title>
      <p>Send payment in local currency into 100+ countries.</p>
      <Content>
        <Column>
          <Thumbnail>
            <img src={GlobalNetwork} alt="txn-bar" />
          </Thumbnail>
          A single connection to access multiple payout methods in 100+
          countries.
        </Column>
        <Column>
          <Thumbnail>
            <img src={BusinessPayment} alt="screening" />
          </Thumbnail>
          Individual Remittances and Business Payments in 60+ Currencies.
        </Column>
      </Content>
    </Wrapper>
  );
};

export default GlobalSettlementAndPayout;
