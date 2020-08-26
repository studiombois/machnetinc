import React, { useState } from 'react';
import { Link } from "@reach/router"

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

import './styles.css';

const renderServiceDetails = (page) => {
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

const FeaturesSection = ({ currentPage }) => {
  const [page, setPage] = useState();
  const [service, setService] = useState('');

  const open = (title) => {
    setService(title)
  }

  const close = () => {
    setService('');
  }

  const getClassName = (title) => {
    return service === title ? 'card is-expanded' : 'card is-collapsed'
  }

  return (
    <Features as={Container}>
      < div className="cards">
        {
          services.filter(service => service.title !== currentPage).map((service, i) => (
            <div key={i} className={getClassName(service.title)}>
              <div className="card__inner">
                <Feature
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
                  <Link to={service.path}>Read More &gt;</Link>
                  {/* <ReadMore onClick={() => { setPage(service.id), open(service.title) }}>
                    Read More &gt;</ReadMore> */}
                </Feature>
              </div>
              <div className="card__expander">
                <span className="close" onClick={close}>&#x2715;</span>
                {renderServiceDetails(page)}
              </div>
            </div>
          ))

        }
      </div>
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