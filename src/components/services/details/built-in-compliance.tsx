import React from 'react';

import { Title, Column, Wrapper, Content, Thumbnail } from './styles';

import TxnBar from 'assets/img/txn-bar.png';
import Screening from 'assets/img/screening.png';

const BuiltInCompliance = () => {
  return (
    <Wrapper id="details">
      <Title>
        <h1>Built-in-compliance</h1>
      </Title>
      <p>
        Integrated Customer Identification Program to meet regulatory and
        compliance requirement.
      </p>
      <Content>
        <Column>
          <Thumbnail>
            <img src={TxnBar} alt="txn-bar" />
          </Thumbnail>
          Manage transaction limits and the KYC information required from the
          users based on the risk assessment and transaction size.
        </Column>
        <Column>
          <Thumbnail>
            <img src={Screening} alt="screening" />
          </Thumbnail>
          OFAC and Global Watch Lists screening meet the compliance requirements
          through due diligence and strong user identity verification processes.
        </Column>
      </Content>
    </Wrapper>
  );
};

export default BuiltInCompliance;
