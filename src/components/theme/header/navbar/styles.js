import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 3rem 0 4rem 0;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    padding: 1.7rem 0 4rem 0;
  }
`;

export const Brand = styled.a`
  display: flex;
  color: #fff;

  @media (max-width: 680px) {
    margin-top:0;
  }
  
  p {
    display: inline;
    font-size: 22px;
    font-family: 'Alata', sans-serif;
    margin: -1px 0 0 5px;
  }
`;
