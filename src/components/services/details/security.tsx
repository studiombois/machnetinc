import React from 'react';

import { Title, Column, Wrapper, Content, Thumbnail } from './styles';

import PCI from 'assets/img/pci.png';
import Encryption from 'assets/img/encryption.png';

const Security = () => {
  return (
    <Wrapper id="details">
      <Title>
        <h1>Security</h1>
      </Title>
      <p>
        System, data and transaction security are the biggest considerations in
        everything we do.
      </p>
      <Content>
        <Column>
          <Thumbnail>
            <img src={Encryption} alt="txn-bar" />
          </Thumbnail>
          <h4>Encryption of data & communication</h4>
          All user and financial information are encrypted at rest with AES-256.
          Decryption keys are stored on separate machines. API service provided
          via static whitelisted IPs. Our infrastructure for storing,
          decrypting, and transmitting data runs in the separate hosting
          infrastructure.
        </Column>
        <Column>
          <Thumbnail>
            <img src={PCI} alt="screening" />
          </Thumbnail>
          <h4>PCI compliant service</h4>
          Our Card service adhere to all of the PCI DSS data security
          standards.The Card widget enables the users to securely provide their
          information for processing.
        </Column>
      </Content>
    </Wrapper>
  );
};

export default Security;
