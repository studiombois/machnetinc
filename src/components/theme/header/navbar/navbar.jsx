import React from 'react';
import { Link } from 'gatsby';
import { Container } from '@ui';

import NavbarLinks from '../navbar-links/navbar-links';

import { Wrapper, Brand } from './styles';

import LogoDark from 'assets/icons/logo-blue.svg';
import LogoLight from 'assets/icons/logo-white.svg';

const Navbar = ({ variant }) => (
  <Wrapper as={Container}>
    <Brand as={Link} to="/">
      <img src={variant === 'light' ? LogoLight : LogoDark} alt="logo" />
    </Brand>
    <NavbarLinks desktop variant={variant} />
  </Wrapper>
);

export default Navbar;
