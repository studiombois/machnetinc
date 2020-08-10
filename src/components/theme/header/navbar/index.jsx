import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'ui';

import NavbarLinks from '../navbar-links';
import LogoBlue from 'assets/icons/logo-blue.svg';
import LogoWhite from 'assets/icons/logo-white.svg';

import { Wrapper, Brand } from './styles';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <Brand as={Link} to="/" theme={theme}>
        <img src={theme === 'light' ? LogoWhite : LogoWhite} alt={theme} />
      </Brand>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
