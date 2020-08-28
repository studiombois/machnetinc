import React from 'react';
import { Link } from "@reach/router"

import { Container } from '@ui';
import { Wrapper, Links, RightMenu, Copyright, Brand, TopFooter } from './styles';

import social from 'data/social.json';
import Logo from 'assets/icons/logo-white.svg';


export const Footer = () => (
  <Wrapper>
    <TopFooter as={Container}>
      <Brand>
        <img src={Logo} alt="logo" />
        <p>Unified API for US domestic and cross border payments</p>
      </Brand>
      <RightMenu>
        <Copyright>
          © {new Date().getFullYear()} Machnet Inc.
        </Copyright>
        <Links >
          <Link to="/terms-of-service">Terms of Service</Link>|
            <Link to="/privacy-policy">Privacy Policy</Link>
        </Links>
        <Links style={{ marginLeft: '5px', marginTop: '-2px' }}>
          {social.map(({ id, name, link, icon }) => (
            <a key={id} style={{ margin: '0' }} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
              <img width="24" src={icon} alt={name} />
            </a>
          ))}
        </Links>
      </RightMenu>
    </TopFooter>
  </Wrapper>
);
