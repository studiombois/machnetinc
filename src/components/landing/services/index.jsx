import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';

import { Container } from 'ui';
import { services, keyPoints } from 'data/services';
import ClientInterface from 'assets/img/client.png';

import {
  Icon,
  Point,
  Details,
  Feature,
  Description,
  ImageWrapper,
  ServiceWrapper,
  FeaturesRowOne,
  FeaturesRowTwo,
  FeaturesWrapper,
} from './styles';

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
    <>
      <ServiceWrapper as={Container}>
        <ImageWrapper>
          <img src={ClientInterface} alt="Send Money" />
        </ImageWrapper>
        <Description>
          <Details>
            <h1>{keyPoints.title}</h1>
            {
              keyPoints.points.map((point, key) => (
                <Point key={key}>
                  <img src={point.icon} alt={point.title} />
                  <p>{point.title}</p>
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
    </>
  );
};
