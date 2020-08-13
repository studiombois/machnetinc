import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 6rem 0;

  h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: 100;
  }
`;

export const ClientList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
`;

export const Client = styled.div`
  padding: 20px 50px;
  width: 240px;   
  margin-bottom: 25px;
  cursor: pointer;

  img {
    filter: grayscale(90%);
    opacity: 0.6;

    &:hover {
      opacity: 1;
      filter: grayscale(0);
    }
  }
`;