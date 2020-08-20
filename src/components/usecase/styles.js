import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 5rem 0 0 0;
  margin-top: 65px;
  display: flex;
  flex-wrap: wrap; 
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
    color: #02446b;
  }
`;

export const Point = styled.div`
  display: flex;
  cursor: pointer;

  img {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }

  p {
    padding: 0
    display: inline-block;
    font-size: 1.125rem;
    color: #02446b;
     
    &:hover {
      color: #15699c;
    }

    small {
      display: block;
      color: #406d8c;
    }
  }
`