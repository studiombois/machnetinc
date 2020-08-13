import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Container } from 'ui';
import { clients } from 'data/clients';

import { Wrapper, ClientList, Client } from './styles';

export const Clients = () => {
  return (
    <Wrapper as={Container}>
      <h1>Trusted By</h1>
      <ClientList>
        {clients.map((client, key) => (
          <Client key={key}>
            <img
              src={client.logo}
              alt={client.name}
              title={client.name}
              width={client.width}
            />
          </Client>
        ))}
      </ClientList>
    </Wrapper>
  );
};
