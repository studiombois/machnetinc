import React from 'react';
import { Link } from "@reach/router"

import { Container } from '@ui';
import { services } from 'data/services';

import {
  Icon,
  Wrapper,
  Feature,
  Features,
  Contents,
  FeaturesHeader,
} from './styles';

import ArrowForwrd from 'assets/icons/arrow-forward-blue.svg';

const FeaturesSection = ({ currentPage }) => {
  return (
    <Features as={Container}>
      {
        services.filter(service => service.title !== currentPage).map((service, i) => (
          <Feature
            data-aos-delay="10"
            data-aos="slide-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-cubic"
          >
            <Contents>
              <Icon>
                <img src={service.icon} alt={service.title} />
              </Icon>
              <h1>{service.title}</h1>
              <p>{service.description}</p>
              <Link to={service.path}>Learn More 
                <img src={ArrowForwrd} alt="arrow forward"/>
              </Link>
            </Contents>
          </Feature>
        ))
      }
    </Features>
  )
}

const Services = ({ currentPage = '' }) => (
  <Wrapper background={currentPage !== '' ? true : false} id="services">
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
    <FeaturesSection currentPage={currentPage} />
  </Wrapper>
)

export default Services;