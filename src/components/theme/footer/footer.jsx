import React from 'react';
import { Link } from '@reach/router';

import { Container } from '@ui';
import {
  Links,
  Brand,
  Wrapper,
  TopFooter,
  RightMenu,
  Copyright,
  BottomFooter
} from './styles';

import social from 'data/social.json';
import Logo from 'assets/icons/logo-white.svg';

export const Footer = () => (
  <Wrapper>
    <TopFooter as={Container}>
      <Brand>
        <Link to="/" style={{ display: "block", marginBottom: '8px' }}>
          <img src={Logo} alt="logo" />
        </Link>
        <p>Unified API for US domestic and cross border payments<br />
          Regulatory Compliance Program • ACH & Cards Payments • Global Payouts</p>
        {social.map(({ id, name, link, icon }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`follow me on ${name}`}
          >
            <img style={{ margin: '10px 0 0 0', width: '24px' }} src={icon} alt={name} />{' '}
          </a>
        ))}
      </Brand>
      <RightMenu>
        <Links>
          <Link style={{ fontSize: 'unset' }} to="/">Home</Link>
          <Link style={{ fontSize: 'unset' }} to="/platform">Platform</Link>
          <Link style={{ fontSize: 'unset' }} to="#contact">Pricing</Link>
          <Link style={{ fontSize: 'unset' }} to="/about-us">About Us</Link>
        </Links>
      </RightMenu>
    </TopFooter>
    <Container>
      <hr style={{ marginBottom: '10px' }} />
    </Container>
    <BottomFooter as={Container}>
      <Copyright>© {new Date().getFullYear()} All Rights Reserved</Copyright>
      <Links>
        <Link to="/terms-of-service">Terms of Service</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </Links>
    </BottomFooter>
  </Wrapper>
);
