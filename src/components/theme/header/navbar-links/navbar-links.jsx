import React from 'react';
import { Link } from "@reach/router"
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Wrapper, RequestDemo } from './styles';

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <AnchorLink href="#about">About</AnchorLink>
    <AnchorLink href="#services">Solution</AnchorLink>
    <AnchorLink href="#pricing">Pricing</AnchorLink>
    <Link to="/contact">Contact</Link>
  </Wrapper>
)

export default NavbarLinks;
