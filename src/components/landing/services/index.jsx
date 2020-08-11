import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';

import { Container } from 'ui';
import { services, keyPoints } from 'data/services';

import {
  Icon,
  Point,
  Details,
  Feature,
  Wrapper,
  Description,
  ImageWrapper,
  ServiceWrapper,
  FeaturesRowOne,
  FeaturesRowTwo,
  FeaturesWrapper,
} from './styles';

import ClientInterface from 'assets/img/client.png';

const RowOne = () => (
  <FeaturesRowOne as={Container} id="services">
    {
      services.map((service, i) => (
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
    <Wrapper as={Container}>
      <h1>{keyPoints.title}</h1>
      <p>Provide turn-key payment services using our hyper integrated API.</p>
      <ServiceWrapper >
        <ImageWrapper>
          <img src={ClientInterface} alt="Send Money" />
        </ImageWrapper>
        <Description>
          <Details>
            {
              keyPoints.points.map((point, key) => (
                <Point key={key}>
                  <img src={point.icon} alt={point.title} />
                  <h1>{point.title}</h1>
                  <p>{point.description}</p>
                </Point>
              ))
            }
          </Details>
        </Description>
      </ServiceWrapper>
      {/* <FeaturesWrapper>
        <RowOne />
        <RowTwo />
      </FeaturesWrapper> */}
    </Wrapper>
  );
};
