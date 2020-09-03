import React from 'react';

import { Title, Column, Wrapper, Content, CardNetwork } from './styles';

import CardPayments from 'assets/icons/card-payments.svg';
import MoneyExchange from 'assets/img/money-exchange.png';

const CardPayment = () => {
  return (
    <Wrapper id="details">
      <Title>
        <h1>Card Payments</h1>
      </Title>
      <Content>
        <Column style={{ alignSelf: 'center' }}>
          <h3>
            Our Debit Card Processing Service is specially designed for Money
            Transfer Services.
          </h3>
          <ul>
            <li>
              We route payments to the least-cost network getting merchants low
              interchange rates, specific to their business.
            </li>
            <li>
              Regulated VISA and MASTER processing fee for about 0.50% + 50¢.
            </li>
          </ul>
        </Column>
        <Column>
          <CardNetwork>
            <img src={CardPayments} alt="card-network" />
          </CardNetwork>
        </Column>
      </Content>
    </Wrapper>
  );
};

export default CardPayment;
