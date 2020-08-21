import React, { useState } from 'react';

import { Container } from '@ui';
import { services } from 'data/services';

import Identity from './details/identity';
import Security from './details/security';
import SameDayACH from './details/same-day-ach';
import CardPayments from './details/card-payments';
import RiskAndFraud from './details/risk-and-fraud';
import BuiltInCompliance from './details/built-in-compliance';
import GlobalSettlementAndPayout from './details/global-settlement-and-payout';
import InstantAccountVerification from './details/instant-account-verification';

import {
  Icon,
  Wrapper,
  Feature,
  Features,
  ReadMore,
  FeaturesHeader,
} from './styles';

const renderPage = (page) => {
  const pages = [
    <Identity />,
    <InstantAccountVerification />,
    <SameDayACH />,
    <CardPayments />,
    <RiskAndFraud />,
    <BuiltInCompliance />,
    <Security />,
    <GlobalSettlementAndPayout />
  ];

  return pages[page - 1];
}

const renderFeatures = (setPage) => (
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
          <ReadMore onClick={() => {
            window.scrollTo(1000, 1000);
            setPage(service.id)
          }}>
            Read More &gt;</ReadMore>
        </Feature>
      ))
    }
  </Features>
)

const Services = () => {
  const [page, setPage] = useState();

  return (
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

      {page > 0 && renderPage(page)}
      {renderFeatures(setPage)}
    </Wrapper>
  )
};

export default Services;