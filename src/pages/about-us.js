import React from 'react';
import styled from 'styled-components';

import { Layout, SEO, Container } from '@ui';

import PageHeader from 'components/page/page-title';

import User from 'assets/icons/user.svg';
import Watch from 'assets/icons/watch.svg';
import Bridge from 'assets/icons/bridge.svg';
import Launch from 'assets/icons/launch.svg';
import Compliant from 'assets/icons/compliant.svg';
import Transactions from 'assets/icons/transactions.svg';

export default () => (
  <Layout>
    <SEO />
    <PageHeader />
    <Container>
      <AboutUs>
        <h1>About Us</h1>
        <p>
          Founded in 2012, our journey started with a goal to enable small and
          medium enterprises to offer white-label digital payment service to its
          users which would be affordable, easy to integrate, and comprise all
          the necessary infrastructure. We wanted to democratize the domestic
          and cross-border payment industry by eliminating the requirement of
          large capital injection to start such service and compete with the
          incumbents.
        </p>
        <p>
          Utilizing our Single Unified API, businesses are able to facilitate
          the movement of hundreds of millions of dollars with a flexible,
          reliable, and easy-to-use API platform. We’ve been able to mitigate
          Technical, Compliance, and Investment challenges and have removed the
          cumbersome process of establishing Digital Payment Services for our
          clients.
        </p>
        <Grid>
          <Item>
            <img src={Launch} alt="launch" />
            <h1>2016</h1>
            <p>Launched</p>
          </Item>
          <Item>
            <img src={Bridge} alt="bridge" />
            <h1>Santa Clara</h1>
            <p>Headquarters</p>
          </Item>
          <Item>
            <img src={Transactions} alt="transactions" />
            <h1>300+ Million</h1>
            <p>Processed Transactions</p>
          </Item>
          <Item>
            <img src={User} alt="user" />
            <h1>Customer-centric</h1>
            <p>Culture</p>
          </Item>
          <Item>
            <img src={Watch} alt="watch" />
            <h1>Reliable</h1>
            <p>99.9% Uptime</p>
          </Item>
          <Item>
            <img src={Compliant} alt="compliant" />
            <h1>Compliant</h1>
            <p>Regulatory Frameworks</p>
          </Item>
        </Grid>
      </AboutUs>
    </Container>
  </Layout>
);

const AboutUs = styled.div`
  h1 {
    font-weight: 100;
    width: max-content;
    display: inline-block;
  }
`;

const Grid = styled.div`
  grid-gap: 0;
  display: grid;
  margin-bottom: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
`;

const Item = styled.div`
  margin-top: 30px;

  h1 {
    margin-bottom: 0;
    font-size: 1.2rem;
    font-weight: bold;

    @media (max-width: 420px) {
      width: 100%;
      text-align: center;
    }
  }

  p {
    font-size: 15px;

    @media (max-width: 420px) {
      text-align: center;
    }
  }

  img {
    width: 40px;
    display: block;
    margin-bottom: 10px;

    @media (max-width: 420px) {
      margin: 10px auto 0 auto;
    }
  }
`;
