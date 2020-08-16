import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: 2.5rem 0;
  align-items: center;
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

  img {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 680px) {
    margin-top:0;
  }

  @media (max-width: 960px) {
    mix-blend-mode: difference;
  }
`;
