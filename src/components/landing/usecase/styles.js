import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 4.5rem 0;
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
  padding-left: 120px;

  @media (max-width: 767) {
    padding-left: 0;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 100;
  }
`;

export const Point = styled.div`
  display: flex;

  img {
    width: 30px;
    height: 30px;
    display: inline-block;
    background: #3673b9d1;
    padding: 10px;
    border-radius: 50%;
    margin-right: 20px;
  }

  p {
    padding: 0
    display: inline-block;
    font-size: 1.125rem;

    small {
      display: block;
    }
  }
`