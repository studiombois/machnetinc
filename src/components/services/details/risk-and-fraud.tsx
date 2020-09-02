import React from 'react';

import { Title, Wrapper, RiskAndFraudThumbnail } from './styles';

import RiskFraud from 'assets/icons/risk-and-fraud.svg';

const RiskAndFraud = () => {
  return (
    <Wrapper id="details">
      <Title>
        <h1>Risk & fraud</h1>
      </Title>
      <p>
        Utilizing user’s personal, financial and behavioral data - we are
        building a focused solution to provide automated risk scores & better
        insights to manually review transactions - to prevent fraud.
      </p>
      <RiskAndFraudThumbnail src={RiskFraud} alt="Risk and fraud" />
    </Wrapper>
  );
};

export default RiskAndFraud;
