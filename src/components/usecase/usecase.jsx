import React, { useState } from 'react';

import { Container } from '@ui';
import { usecases } from 'data/services';
import { Wrapper, Thumbnail, Description, ApiPlatform, Point, Details } from './styles';

export const Usecase = () => {
  const [api, setApi] = useState(usecases[0].api);
  const [height, setHeight] = useState(usecases[0].height);

  return (
    <Wrapper id="usecase">
      <ApiPlatform as={Container}>
        <Description>
          <Details>
            <h1>API Platform!</h1>
            {
              usecases.map((usecase, key) => (
                <Point
                  data-aos-delay="10"
                  data-aos="slide-up"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out-cubic" key={key} onClick={() => { setApi(usecase.api), setHeight(usecase.height) }}>
                  <img src={usecase.icon} alt={usecase.title} />
                  <p>{usecase.title}
                    <small>{usecase.description}</small>
                  </p>
                </Point>
              ))
            }
          </Details>
        </Description>
        <Thumbnail
          data-aos-delay="10"
          data-aos="slide-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out-cubic"
        >
          <iframe
            src={api}
            style={{ width: "597px", height: `${height}`, border: "0", transform: "scale(1)", overflow: "hidden" }}
            sandbox="allow-scripts allow-same-origin">
          </iframe>
        </Thumbnail>
      </ApiPlatform>
    </Wrapper>
  );
};
