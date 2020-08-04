import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';

import { Container } from 'ui';
import { services } from 'data/services';
import { Wrapper, FeaturesRowOne, FeaturesRowTwo, Feature, Icon } from './styles';

const RowOne = () => (
  <FeaturesRowOne as={Container} id="services">
    {
      services.slice(0, 4).map((service, i) => (
        <Feature key={i}>
          <Icon>
            <img src={service.icon} alt={service.title} />
          </Icon>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
        </Feature>
      ))
    }
  </FeaturesRowOne>
)

const RowTwo = () => (
  <FeaturesRowTwo as={Container}>
    {
      services.slice(4, 8).map((service, i) => (
        <Feature key={i}>
          <Icon>
            <img src={service.icon} alt={service.title} />
          </Icon>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
        </Feature>
      ))
    }
  </FeaturesRowTwo>
)

export const Service = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <RowOne/>
      <RowTwo/>
      <h1>Provide turn-key payment services using our hyper integrated API.</h1>
    </Wrapper>
  );
};
