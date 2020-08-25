import React from 'react';

import { Title, Column, Wrapper, Content, CardNetwork } from './styles';

import Card from 'assets/img/card-network.png';
import MoneyExchange from 'assets/img/money-exchange.png';

const CardPayment = () => {
  return (
    <Wrapper id="details">
      <Title>
        <h1>Card Payments</h1>
      </Title>
      <p>
        Our Debit Card Processing Service is especially designed for Money
        Transfer Services.
      </p>
      <Content>
        <Column>
          <CardNetwork>
            <img src={Card} alt="card-network" style={{ width: '275px' }} />
          </CardNetwork>
          We routes payments to the least cost network getting merchants low
          interchange rates, specific to their business.
        </Column>
        <Column>
          <CardNetwork>
            <img
              src={MoneyExchange}
              alt="money-exchange"
              style={{ width: '200px' }}
            />
          </CardNetwork>
          Regulated VISA and MASTER processing fee for about 0.50% + 50¢
        </Column>
      </Content>
    </Wrapper>
  );
};

export default CardPayment;
