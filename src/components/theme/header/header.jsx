import React, { useState } from 'react';

import Navbar from './navbar/navbar';
import Sidebar from './sidebar/sidebar';
import Hamburger from './hamburger/hamburger';

import { Wrapper, Overlay } from './styles';

export const Header = () => {
  const [sidebar, toggle] = useState(false);

  return (
    <Wrapper>
      <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
      <Navbar />
      <Hamburger sidebar={sidebar} toggle={toggle} />
      <Sidebar sidebar={sidebar} toggle={toggle} />
    </Wrapper>
  );
};
