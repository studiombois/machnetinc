import React from 'react';
import { Link } from "@reach/router";
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Wrapper, RequestDemo } from './styles';

const NavbarLinks = ({ desktop, variant }) => (
  <Wrapper variant={variant} desktop={desktop}>
    <Link to="/platform">Platform</Link>
    <Link to="#contact">Pricing</Link>
    <Link to="/about-us">About Us</Link>
  </Wrapper>
)

export default NavbarLinks;
