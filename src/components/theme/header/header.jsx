import React, { useState } from 'react';

import Sidebar from './sidebar/sidebar';
import Hamburger from './hamburger/hamburger';
import Navbar from './navbar/navbar';

import { Wrapper, Overlay } from './styles';

export const Header = ({ variant }) => {
  const [sidebar, toggle] = useState(false);

  return (
    <Wrapper>
      <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
      <Navbar variant={variant} />
      <Sidebar sidebar={sidebar} toggle={toggle} />
      <Hamburger variant={variant} sidebar={sidebar} toggle={toggle} />
    </Wrapper>
  );
};
