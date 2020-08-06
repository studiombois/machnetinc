import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 100px;
  background: #fdfdfd;
  padding: 12rem 0 4rem 0;
  border-top-left-radius: 21px;

  @media (max-width: 1960px) {
    padding: 12rem 0 4rem;
  }
`;

export const Links = styled.div`
  text-align: center;

  @media (max-width: 680px) {
    text-align: center;
  }

  a {
    margin: 0 0.5rem;

    img {
      margin: 0;
    }

    &:first-child,
    &:last-child {
      margin: 0;
    }
  }
`;

export const Copyright = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: small;
`;
