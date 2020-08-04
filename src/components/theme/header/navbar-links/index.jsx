import React, {useContext} from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { ButtonSmall } from 'ui';
import ToggleTheme from 'components/theme/header/toggle-theme';

import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <AnchorLink href="#about">About</AnchorLink>
      <AnchorLink href="#services">Solution</AnchorLink>
      <AnchorLink href="#pricing">Pricing</AnchorLink>
      <AnchorLink href="#contact">Contact</AnchorLink>
      <ButtonSmall as={AnchorLink} href="#contact">
      Request Demo
      </ButtonSmall>
      {/* <ToggleTheme /> */}
    </Wrapper>
  )

};

export default NavbarLinks;
