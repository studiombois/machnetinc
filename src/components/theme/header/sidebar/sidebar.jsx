import React from 'react';

import NavbarLinks from '../navbar-links/navbar-links';

import { Wrapper } from './styles';

const Sidebar = ({ sidebar, toggle }) => (
  <Wrapper active={sidebar} onClick={toggle}>
    <NavbarLinks />
  </Wrapper>
);

export default Sidebar;
