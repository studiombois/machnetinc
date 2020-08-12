import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 4.5rem 0;
  display: flex;
  flex-wrap: wrap; 
  background: #373a59;
`;

export const ApiPlatform = styled.div`
  display: flex;
  flex-wrap: wrap; 
`;
export const Thumbnail = styled.div`
  flex:1;
  display: flex;
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

  @media (max-width: 767) {
    padding-left: 0;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 100;
  }
`;

export const Details = styled.div`
  padding: 3rem 4rem;

  h1 {
    font-size: 2rem;
    font-weight: 100;
    color: #fff;
  }
`;

export const Point = styled.div`
  display: flex;
  cursor: pointer;

  img {
    width: 50px;
    height: 50px;
    display: inline-block;
    background: #3673b9d1;
    padding: 8px;
    border-radius: 50%;
    margin-right: 20px;
  }

  p {
    padding: 0
    display: inline-block;
    font-size: 1.125rem;
    color: #fff;
     
    &:hover {
      color: #c9ddf3;
    }

    small {
      display: block;
    }
  }
`