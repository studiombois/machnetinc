import React from 'react';
import { Link } from "@reach/router"

import { Container } from 'ui';
import { Wrapper, Links, Copyright } from './styles';

import social from 'data/social.json';


export const Footer = () => (
  <Wrapper>
    <Links as={Container}>
      <Link to="/">Home</Link>
      <Link to="/">About Us</Link>
      <Link to="/">Pricing</Link>
      <Link to="/">Career</Link>
      <Link to="/contact">Contact</Link>
    </Links>
    <Copyright>
      © {new Date().getFullYear()} Machnet, All rights are reserved
    </Copyright>
    <Links>
      {social.map(({ id, name, link, icon }) => (
        <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
          <img width="24" src={icon} alt={name} />
        </a>
      ))}
    </Links>

  </Wrapper>
);
