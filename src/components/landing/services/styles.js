import styled from 'styled-components';
import Wave from 'assets/illustrations/wave.svg';

export const Wrapper = styled.div`
  padding: 4.5rem 0;

  h1 {
    text-align: center;
    font-size: 25px;
  }

  p {
    text-align: center;
  }
`

export const FeaturesWrapper = styled.div`
  background-color: #3573b9;
  padding: 3rem 0;
  border-top-left-radius: 21px;
  margin-top: 115px;

  h1 {
    font-size: 25px;
    color: #fff;
    text-align: center;
  }
`

export const FeaturesRowOne = styled.div`
  padding: 2.4rem 1rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: -185px;
`;

export const FeaturesRowTwo = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1.5rem 1rem;
  justify-content: space-around;
`;
  
export const Feature = styled.div`
  padding:15px;
  width:240px;
  border-bottom-left-radius: 21px;
  border-top-right-radius: 21px;
  border-bottom-right-radius: 21px;
  background-color: #fff;
  margin-bottom: 25px;

  h1 {
    font-size: 16px;
    text-align:center;
    margin-bottom: 10px;
    color: #3673b9;
  }

  p {
    text-align:center;
    font-size:small;
    color: #484848;
  }
}
`;

export const Icon = styled.div`
  width: 60px;
  height: 60px;
  padding: 12px;
  margin: auto;
  overflow: hidden;
  border-radius: 50%;
  background: #bed2e9;
  margin-bottom: 20px;

  margin-top: -45px;

  img {
    width: 100%;
    margin: auto;
    display: block; 
  }
`;


export const ServiceWrapper = styled.div`
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
    font-size: 2rem;
    font-weight: 100;
    color: #604324;
  }
`;

export const Point = styled.div`
  // display: flex;
  padding: 25px 20px;
  width:300px;
  // flex-direction: column;
  // max-width: 600px;

  img {
    width: 50px;
    height: 50px;
    display: block;
    background: #f3a800;
    padding: 6px;
    border-bottom-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    margin-right: 10px;
    margin-bottom: 15px;
  }

  h1 {
    color: #237aaf;
    font-size: 1rem;
    font-weight: bold;
    text-align: left;
    margin-bottom: 10px;
  }

  p{
    margin: 0;
    text-align: left;
    font-size: 14px;
  }
`