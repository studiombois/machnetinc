import React from 'react';
import { Link } from '@reach/router';

import { Container } from '@ui';
import { services, keyPoints } from 'data/services';

import {
  Icon,
  Point,
  Details,
  Wrapper,
  Feature,
  Features,
  FeaturesHeader,
} from './styles';

export const Services = () => (
  <Wrapper id="services">
    <FeaturesHeader as={Container}>
      <p
        data-aos-delay="10"
        data-aos="slide-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-cubic">Services</p>
      <h1
        data-aos-delay="10"
        data-aos="slide-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-cubic"
      >Integrate our API in your software application for <span>turn-key payment solution</span></h1>
    </FeaturesHeader>
    <Features as={Container}>
      {
        services.map((service, i) => (
          <Feature key={i}
            data-aos-delay="10"
            data-aos="slide-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-cubic"
          >
            <Icon>
              <img src={service.icon} alt={service.title} />
            </Icon>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
            <Link to="/">Read More &gt;</Link>
          </Feature>
        ))
      }
    </Features>
  </Wrapper>
);

export const WhatWeProvide = () => (
  <Wrapper id="services">
    <Container>
      <p
        data-aos-delay="10"
        data-aos="slide-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-cubic">{keyPoints.title}</p>
      <h1
        data-aos-delay="10"
        data-aos="slide-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-cubic"
      >Integrate our API in your software application for <span>turn-key payment solution</span></h1>

      <Details>
        {
          keyPoints.points.map((point, key) => (
            <Point
              key={key}
              data-aos-delay="10"
              data-aos="slide-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-cubic"
            >
              <img src={point.icon} alt={point.title} />
              <h1>{point.title}</h1>
              <p>{point.description}</p>
            </Point>
          ))
        }
      </Details>
    </Container>
  </Wrapper>
);