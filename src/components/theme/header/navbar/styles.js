import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 3rem 0 4rem 0;
  justify-content: space-between;
`;

export const Brand = styled.a`
  display: flex;
  color: #fff;

  p {
    display: inline;
    font-size: 22px;
    font-family: 'Alata', sans-serif;
    margin: -1px 0 0 5px;
  }

  @media (max-width: 680px) {
    margin-top:0;
  }

  @media (max-width: 960px) {
    mix-blend-mode: difference;
  }
`;
