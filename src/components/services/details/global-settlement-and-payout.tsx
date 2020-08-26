import React from 'react';

import { Title, Column, Wrapper, Content, Thumbnail } from './styles';

import Remittance from 'assets/img/remittance.png';
import Connection from 'assets/img/connection.png';

const GlobalSettlementAndPayout = () => {
  return (
    <Wrapper id="details">
      <Title>
        <h1>Built-in-compliance</h1>
      </Title>
      <p>Send payment in local currency into 100+ countries.</p>
      <Content>
        <Column>
          <Thumbnail>
            <img src={Connection} alt="txn-bar" />
          </Thumbnail>
          A single connection to access multiple payout methods in 100+
          countries.
        </Column>
        <Column>
          <Thumbnail>
            <img src={Remittance} alt="screening" />
          </Thumbnail>
          Individual Remittances and Business Payments in 60+ Currencies.
        </Column>
      </Content>
    </Wrapper>
  );
};

export default GlobalSettlementAndPayout;
