import React from 'react';
import { Link } from "@reach/router"

import { Container } from '@ui';
import { Wrapper, Links, Copyright, Brand, BottomFooter, TopFooter } from './styles';

import social from 'data/social.json';
import Logo from 'assets/icons/logo-blue.svg';


export const Footer = () => (
  <Wrapper as={Container}>
    <TopFooter>
      <Brand>
        <img src={Logo} alt="logo" />
        <p>Unified API for US domestic and cross border payments</p>
      </Brand>
      <Links >
        <Link to="/">Home</Link>
        <Link to="/">About Us</Link>
        <Link to="/">Pricing</Link>
        <Link to="/contact">Contact</Link>
      </Links>
      {/* <Links>
        {social.map(({ id, name, link, icon }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            <img width="24" src={icon} alt={name} />
          </a>
        ))}
      </Links> */}
    </TopFooter>
    <hr />
    <BottomFooter>
      <Copyright>
        © {new Date().getFullYear()} Machnet Inc.
      </Copyright>
      <Links varient="small">
        <Link to="/">Terms of Use</Link>
        <Link to="/">Privacy Policy</Link>
      </Links>
    </BottomFooter>
  </Wrapper>
);
