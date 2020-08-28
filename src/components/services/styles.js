import styled from 'styled-components';

import Prism from 'assets/img/prism.svg';

export const Wrapper = styled.div`
  padding: ${({background}) => background? '6rem' : '3rem'} 0;
  margin-top: 3rem;

  /* background by SVGBackgrounds.com */
  background-image: ${({background}) => background? `url(${Prism})` : ''};
  background-attachment: fixed;
  background-size: cover;
  
  @media (max-width: 750px) {
    margin: 0;
    padding: 3rem 0 0 0;
  }

  h1 {
    text-align: left;
    font-size: 2rem;
    font-weight: 500;
    width: 65%;
    margin-bottom: 0;

    span {
      color: #3999d5;
    }

    @media (max-width: 750px) {
      width: 100%;
    }
  }

  p {
    text-align: left;
    color: #3196d4;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 2rem 0;
`;
  
export const Point = styled.div`
  width: 50%;
  padding: 25px 30px 0 0;
  
  @media (max-width: 750px) {
    width: 100%;
  }

  img {
    width: 50px;
    height: 50px;
    display: block;
    margin-bottom: 15px;
  }

  h1 {
    color: #0a2540;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 10px;
  }

  p{
    margin: 0;
    text-align: left;
    font-size: 1.1rem;
    color: #4f5f70;
    font-family: 'Nunito', sans-serif;
  }
`;

export const FeaturesHeader = styled.div`
  padding: 0 10px;

  h1 {
    text-align: left;
    font-size: 2rem;
    font-weight: 500;
    width: 65%;
    margin-bottom: 2.2rem;

    span {
      color: #3999d5;
    }

    @media (max-width: 750px) {
      width: 100%;
    }
  }

  p {
    text-align: left;
    color: #3196d4;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
`;

export const Features = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Feature = styled.div`
  width: 100%;;
  padding: 20px 15px;
  background: #fdfdfd;
  margin: 10px 10px 25px 10px;
  box-shadow: 0 15px 25px #00000017;
    
  @media (min-width: 48rem) {
    width: 47%;
  }
    
  @media (min-width: 62rem) {
    width: 23%;
  }
    
  &:before {
    content: "";
    float: left;
    padding-top: 100%;
  }
`;

export const Contents = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.2rem;
    text-align: left;
    margin-bottom: 10px;
    color: #3673b9;
  }

  p {
    color: #5e626b;
    font-size: 15px;
    text-align: left;
    margin-bottom: 10px;
    flex-grow: 1;
  }

  a {
    color: #5c5e63;
    display: flex;
    font-size: 15px;
    margin-top: 20px;
    text-decoration: underline;

    &:hover {
      color: #7c7c7c;
    }

    img {
      width: 18px;
      margin-left: 5px;
    }
  }
`;

export const ReadMore = styled.div`
  font-size: small;
  margin: 0;
  cursor: pointer;
  color: #624792;

  &:hover {
    color: #3673b9;
  }
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  margin-bottom: 20px;

  img {
    width: 100%;
    margin: auto;
    display: block; 
  }
`;