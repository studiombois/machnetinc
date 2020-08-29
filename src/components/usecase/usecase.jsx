import React, { useState } from 'react';

import { Container } from '@ui';
import { usecases } from 'data/services';
import {
  Wrapper,
  Thumbnail,
  Description,
  ApiPlatform,
  Point,
  Details,
} from './styles';

export const Usecase = () => {
  const [activeUsecase, setActiveUsecase] = useState(usecases[0].title);

  return (
    <Wrapper id="usecase">
      <ApiPlatform as={Container}>
        <Description>
          <Details>
            <h1>For Developers!</h1>
            {usecases.map((usecase, key) => (
              <Point
                key={key}
                isActive={usecase.title === activeUsecase}
                onClick={() => setActiveUsecase(usecase.title)}
              >
                <img src={usecase.icon} alt={usecase.title} />
                <p>
                  {usecase.title}
                  <small>{usecase.description}</small>
                </p>
              </Point>
            ))}
          </Details>
        </Description>
        <Thumbnail>
          {usecases.map((usecase, key) => (
            <iframe
              key={key}
              src={usecase.api}
              sandbox="allow-scripts allow-same-origin"
              style={getIframeStyle(usecase, activeUsecase)}
            ></iframe>
          ))}
        </Thumbnail>
      </ApiPlatform>
    </Wrapper>
  );
};

const getIframeStyle = (usecase, activeUsecase) => {
  return {
    border: '0',
    margin: '0',
    width: '597px',
    overflow: 'hidden',
    height: `${usecase.title === activeUsecase ? '517px' : '0'}`,
    visibility: `${usecase.title === activeUsecase ? 'visible' : 'hidden'}`,
  };
};
