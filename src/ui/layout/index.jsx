import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';

import { Header, Footer } from 'components/theme';

import './fonts.css';
import { Global } from './styles';

export const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Header />
      <Global theme={theme} />
      {children}
      <Footer />
    </>
  );
};
