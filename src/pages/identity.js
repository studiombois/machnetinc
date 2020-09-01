import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Layout, SEO, Container } from '@ui';

import PageHeader from 'components/page/page-title';
import Services from 'components/services/services';
import Identity from 'components/services/details/identity';

import DownArrow from 'assets/icons/down-arrow-ios.svg';

export default () => (
  <Layout>
    <SEO />
    <PageHeader  />
    <Container>
      <Identity/>
      <Scroll as={AnchorLink} href="#services">
        <img src={DownArrow} alt="down-arrow"/>
      </Scroll>
    </Container>
    <Services currentPage="Identity"/>
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