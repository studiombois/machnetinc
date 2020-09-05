import styled from 'styled-components';

import Prism from 'assets/img/prism.svg';

export const Wrapper = styled.div`
  padding: ${({background}) => background? '6rem' : '3rem'} 0;
  margin-top: 3rem;

  /* background by SVGBackgrounds.com */
  background-image: ${({background}) => background? `url(${Prism})` : ''};
  background-attachment: fixed;
  background-size: cover;
  
  @media (max-width: 768px) {
    margin: 0;
    padding: 3rem 0 0 0;
  }

  @media (max-width: 481px) {
    margin: 0;
    padding: 0;
  }

  h1 {
    text-align: left;
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 0.5rem;

    span {
      color: #3999d5;
    }

    @media (max-width: 768px) {
      width: 100%;
    }

    @media (max-width: 481px) {
      font-size: x-large;
    }
  }

  p {
    text-align: left;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;

    span {
      color: #3999d5;
    }
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
  
  @media (max-width: 768px) {
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
    // font-weight: bold;
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

  @media (max-width: 481px) {
    padding: 0;
  }

  h1 {
    text-align: left;
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 0.5rem;

    span {
      color: #3999d5;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  p {
    text-align: left;
    font-size: 1.2rem;
    margin-bottom: 2.2rem;

    span {
      color: #3999d5;
    }
  }
`;

export const Features = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 481px) {
    display: block;
  }
`;

export const Feature = styled.div`
  width: 100%;;
  padding: 20px 15px;
  background: #fdfdfd;
  margin: 10px 0 25px 0;
  box-shadow: 0 15px 25px #00000017;
    
  @media (min-width: 481px) {
    width: 45%;
    margin: 10px 10px 25px 10px;
  }

  @media (min-width: 768px) {
    width: 47%;
    margin: 10px 10px 25px 10px;
  }
    
  @media (min-width: 922px) {
    width: 23%;
    margin: 10px 10px 25px 10px;
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
    font-size: 15px;
    text-align: left;
    margin-bottom: 10px;
    flex-grow: 1;

    span {
      color: #3999d5;
    }
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