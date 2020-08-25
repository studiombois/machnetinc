import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 3rem 0;

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
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Feature = styled.div`
  height: 100%;
  padding: 20px 15px;
  margin: 10px 10px 25px 10px;
  box-shadow: 0px 4px 10px #0000001c;

  h1 {
    font-size: 1rem;
    text-align: left;
    margin-bottom: 10px;
    color: #3673b9;
  }

  p {
    color: #484848;
    font-size: 15px;
    text-align: left;
    margin-bottom: 10px;
  }

  a {
    display: block;
    font-size: 15px;
    margin-top: 20px;
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
  width: 30px;
  height: 30px;
  margin-bottom: 20px;

  img {
    width: 100%;
    margin: auto;
    display: block; 
  }
`;