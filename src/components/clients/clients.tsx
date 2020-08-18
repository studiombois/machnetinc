import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Container } from '@ui';
import { clients } from 'data/clients';

import { Wrapper, ClientList, Client } from './styles';

export const Clients = () => {
  return (
    <Wrapper as={Container}>
      <h1
        data-aos-delay="10"
        data-aos="slide-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-cubic"
      >
        Trusted By
      </h1>
      <ClientList>
        {clients.map((client, key) => (
          <Client
            key={key}
            data-aos-delay="10"
            data-aos="slide-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-cubic"
          >
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
