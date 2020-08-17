import React from 'react';
import { Link } from "@reach/router"

import { Container } from 'ui';
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
        <Link to="/">
          <ion-icon name="home-outline"></ion-icon>
          Home
        </Link>
        <Link to="/">
          <ion-icon name="business-outline"></ion-icon>About Us
        </Link>
        <Link to="/">
          <ion-icon name="pricetag-outline"></ion-icon>Pricing
        </Link>
        <Link to="/contact">
          <ion-icon name="call-outline"></ion-icon>Contact
        </Link>
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
