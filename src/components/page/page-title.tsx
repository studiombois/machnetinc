import React from 'react';
import { Link } from '@reach/router';

import { Container } from '@ui';
import { Header } from 'components/theme';

import Wave from 'assets/illustrations/wave.svg';

import { Wrapper, Background, WaveBackground, Title } from './styles';

const PageHeader = () => {
  return (
    <Wrapper>
      <Background>
        <Header variant="light" />
      </Background>
      <WaveBackground src={Wave} alt="wave" />
    </Wrapper>
  );
};

export default PageHeader;
