import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 4rem 0;
  background-image: linear-gradient( #3673b9, #eff2fc);
`;
  
  export const Details = styled.div`
  width: 60%;
  margin: auto;

  h1 {
    margin-bottom: 2rem;
    color: #fff;
    text-align: center;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`;
