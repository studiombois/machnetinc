import React, { useState } from 'react';

import { Container } from '@ui';
import { keyPoints } from 'data/services';


import { Point, Details, Wrapper } from './styles';

export const WhatWeProvide = () => (
  <Wrapper id="services">
    <Container>
      <h1
        data-aos-delay="10"
        data-aos="slide-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-cubic">{keyPoints.title}</h1>
      <p
        data-aos-delay="10"
        data-aos="slide-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-cubic"
      >Integrate our API in your software application for a <span>turn-key payment solution</span></p>

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

export default WhatWeProvide;