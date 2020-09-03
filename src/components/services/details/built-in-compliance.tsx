import React from 'react';

import { Title, Column, Wrapper, Content, Thumbnail } from './styles';

import BarDiagram from 'assets/icons/bar-diagram.svg';
import IdentityVerification from 'assets/icons/identity-verification.svg';

const BuiltInCompliance = () => {
  return (
    <Wrapper id="details">
      <Title>
        <h1>Built-in compliance</h1>
      </Title>
      <p>
        Integrated Customer Identification Program to meet regulatory and
        compliance requirements.
      </p>
      <Content>
        <Column>
          <Thumbnail>
            <img src={BarDiagram} alt="txn-bar" />
          </Thumbnail>
          Manage transaction limits and the KYC information required from the
          users based on the risk assessment and transaction size.
        </Column>
        <Column>
          <Thumbnail>
            <img src={IdentityVerification} alt="screening" />
          </Thumbnail>
          OFAC and Global Watch List screening meet the compliance requirements
          through due diligence and strong user identity verification processes.
        </Column>
      </Content>
    </Wrapper>
  );
};

export default BuiltInCompliance;
