import React, { useContext } from 'react';
import { Link } from "@reach/router"
import { ThemeContext } from 'providers/ThemeProvider';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { ButtonSmall } from 'ui';
import ToggleTheme from 'components/theme/header/toggle-theme';

import { Wrapper, RequestDemo } from './styles';

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <AnchorLink href="#about">About</AnchorLink>
      <AnchorLink href="#services">Solution</AnchorLink>
      <AnchorLink href="#pricing">Pricing</AnchorLink>
      <Link to="/contact">Contact</Link>
      <Link to="/contact">
        <RequestDemo>
          Request Demo
        </RequestDemo>
      </Link>
      {/* <ToggleTheme /> */}
    </Wrapper>
  )

};

export default NavbarLinks;
