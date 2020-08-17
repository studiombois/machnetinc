import React from 'react';
import { Link } from '@reach/router';

import { Container } from 'ui';
import { services, keyPoints } from 'data/services';

import {
  Icon,
  Point,
  Details,
  Wrapper,
  Feature,
  Features,
  Description,
  ImageWrapper,
  WhatWeProvide,
} from './styles';

import ClientInterface from 'assets/img/client.png';

const FeaturesSection = () => (
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
)

const WhatWeProvideSection = () => (
  <WhatWeProvide >
    <Description>
      <Details>
        {
          keyPoints.points.map((point, key) => (
            <Point
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
    </Description>
  </WhatWeProvide>
)

export const Service = () => {
  return (
    <Wrapper as={Container} id="services">
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
      >{keyPoints.subTitle}</h1>
      <WhatWeProvideSection />
      {/* <h1
        data-aos-delay="10"
        data-aos="slide-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-cubic">Services</h1>
      <p
        data-aos-delay="10"
        data-aos="slide-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-cubic">Integrate our API in your software application for a turn-key payment solution.</p>
      <FeaturesSection /> */}
    </Wrapper>
  );
};
