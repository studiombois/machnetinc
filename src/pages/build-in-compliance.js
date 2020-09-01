import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Layout, SEO, Container } from '@ui';

import PageHeader from 'components/page/page-title';
import Services from 'components/services/services';
import BuiltInCompliance from 'components/services/details/built-in-compliance';

import DownArrow from 'assets/icons/down-arrow-ios.svg';

export default () => (
  <Layout>
    <SEO />
    <PageHeader />
    <Container>
      <BuiltInCompliance />
      <Scroll as={AnchorLink} href="#services">
        <img src={DownArrow} alt="down-arrow" />
      </Scroll>
    </Container>
    <Services currentPage="Built-in compliance" />
  </Layout>
);

const Scroll = styled.div`
  margin: auto;
  display: block;
  width: fit-content;

  img {
    width: 80px;
    margin: auto;
    display: block;
    cursor: pointer;
  }
`;
