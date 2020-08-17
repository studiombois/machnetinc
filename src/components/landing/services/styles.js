import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 3rem 0;
  margin-top: 7rem;

  h1 {
    text-align: left;
    font-size: 2rem;
    font-weight: 500;
    width: 65%;
    margin-bottom: 0;
  }

  p {
    text-align: left;
    color: #3196d4;
    font-size: 1.2rem;
    font-family: 'Nunito', sans-serif;
    margin-bottom: 0.5rem;
  }
`;

export const WhatWeProvide = styled.div`
  padding: 1rem 0; 
  display: flex;
  flex-wrap: wrap;
`;

export const ImageWrapper = styled.div`
  flex:1;
  display: flex;
  max-width: 450px;
  flex-direction: column;
  justify-content: center;
  
  img {
    width: 250px;
    height: auto;
    margin: auto;
    display: block;
  }
`;

export const Description = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  h1 {
    font-size: 15px;
    font-weight: 100;
    color: #604324;
  }
`;

export const Point = styled.div`
  width: 50%;
  padding: 25px 30px 0 0;

  img {
    width: 50px;
    height: 50px;
    display: block;
    margin-bottom: 15px;
  }

  h1 {
    color: #0a2540;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: left;
    margin-bottom: 10px;
    font-family: 'Nunito', sans-serif;
  }

  p{
    margin: 0;
    text-align: left;
    font-size: 16px;
    color: #0a2540;
    font-family: 'Nunito', sans-serif;
  }
`;

export const Features = styled.div`
  padding: 2.4rem 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
`;

export const Feature = styled.div`
  padding:15px;
  width:240px;
  margin-bottom: 25px;

  h1 {
    font-size: 15px;
    text-align: left;
    margin-bottom: 10px;
    color: #3673b9;
  }

  p {
    text-align: left;
    font-size: small;
    color: #484848;
    margin-bottom: 10px;
  }

  a {
    font-size: small;
    margin: 0;

    &:hover {
      color: #3673b9;
    }
  }
}
`;

export const Icon = styled.div`
  width: 50px;
  height: 50px;
  padding: 8px;
  margin-bottom: 20px;

  img {
    width: 100%;
    margin: auto;
    display: block; 
  }
`;


