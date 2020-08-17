import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'ui';

import NavbarLinks from '../navbar-links';

import { Wrapper, Brand } from './styles';

import Logo from 'assets/icons/logo-white.svg';

const Navbar = () => {

  return (
    <Wrapper as={Container}>
      <Brand as={Link} to="/">
        <img src={Logo} alt="logo" />
      </Brand>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
