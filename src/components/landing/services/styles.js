import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 5rem 0;

  h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: 100;
  }

  p {
    text-align: center;
  }
`

export const WhatWeProvide = styled.div`
  padding: 1rem 0; 
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 6rem; 
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
  padding: 25px 20px;
  width:300px;

  img {
    width: 50px;
    height: 50px;
    display: block;
    background: #f3a800;
    padding: 8px;
    border-bottom-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    margin-right: 10px;
    margin-bottom: 15px;
  }

  h1 {
    color: #237aaf;
    font-size: 15px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 10px;
  }

  p{
    margin: 0;
    text-align: left;
    font-size: small;
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
  overflow: hidden;
  background: #a140f7;
  margin-bottom: 20px;
  border-bottom-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;

  img {
    width: 100%;
    margin: auto;
    display: block; 
  }
`;


