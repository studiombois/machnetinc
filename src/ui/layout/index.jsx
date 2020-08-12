import AOS from "aos";
import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';

import { Footer } from 'components/theme';

import './fonts.css';
import "aos/dist/aos.css";
import { Global } from './styles';

export const Layout = ({ children }) => {
  AOS.init();
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Global theme={theme} />
      {children}
      <Footer />
    </>
  );
};
