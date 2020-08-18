import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';

import { Footer } from 'components/theme';

import './fonts.css';
import 'aos/dist/aos.css';
import { Global } from './styles';

export const Layout = ({ children }) => {
  let AOS;
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const AOS = require("aos");
    AOS.init();
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  })

  return (
    <>
      <Global theme={theme} />
      {children}
      <Footer />
    </>
  );
};
