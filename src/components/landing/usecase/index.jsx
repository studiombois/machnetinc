import React, { useContext } from 'react';

import { Container } from 'ui';
import { Wrapper, Thumbnail, Description, Point } from './styles';

import { usecases } from 'data/services';

export const Usecase = () => {
  return (
    <Wrapper as={Container}>
      <Description>
        <h1>API Platform</h1>
        {
          usecases.map((usecase, key) => (
            <Point key={key}>
              <img src={usecase.icon} alt={usecase.title} />
              <p>{usecase.title}
                <small>{usecase.description}</small>
              </p>
            </Point>
          ))
        }
      </Description>
      <Thumbnail>
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba(239%2C242%2C252%2C1)&t=lucario&wt=none&l=text%2Fx-java&ds=true&dsyoff=16px&dsblur=42px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=curl%2520-X%2520POST%2520https%253A%252F%252Fsandbox.machpay.com%252Fv2%252Fsenders%2520%255C%250A%2520%2520-H%2520%27Accept%253A%2520application%252Fjson%27%2520%255C%250A%2520%2520-H%2520%27X-Client-Id%253A%2520clientid%27%2520%255C%250A%2520%2520-H%2520%27X-Client-Secret%253A%2520clientsecret%27%2520%255C%250A%2520%2520-d%2520%257B%2520%255C%250A%2520%2520%2520%2520%2520%2520%2522first_name%2522%253A%2520%2522string%2522%252C%2520%255C%250A%2520%2520%2520%2520%2520%2520%2522middle_name%2522%253A%2520%2522string%2522%252C%2520%255C%250A%2520%2520%2520%2520%2520%2520%2522last_name%2522%253A%2520%2522string%2522%252C%2520%255C%250A%2520%2520%2520%2520%2520%2520%2522mobile_phone%2522%253A%2520%2522string%2522%252C%2520%255C%250A%2520%2520%2520%2520%2520%2520%2522email%2522%253A%2520%2522user%2540example.com%2522%252C%2520%255C%250A%2520%2520%2520%2520%2520%2520%2522state%2522%253A%2520%2522string%2522%2520%255C%250A%2520%2520%257D"
          style={{ width: "597px", height: "415px", border: "0", transform: "scale(1)", overflow: "hidden" }}
          sandbox="allow-scripts allow-same-origin">
        </iframe>
      </Thumbnail>
    </Wrapper>
  );
};
