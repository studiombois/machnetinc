import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;

  @media (max-width: 1960px) {
    padding: 2rem 0;
  }

  hr {
    background: #e6e6e6;
  }
`;

export const TopFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 750px) {
    display: block;
  }
`;

export const Brand = styled.div`
  max-width: 300px;

  p {
    color: #78757a;
    font-size: small;
  }

  @media (max-width: 750px) {
    max-width: 100%;
    text-align: center;
  }
`;

export const Links = styled.div`
  text-align: right;
  font-size: ${({varient}) => varient};
  
  @media (max-width: 680px) {
    text-align: center;
  }
  
  a {
    color: #78757a;
    margin: 0 0.5rem;

    img {
      margin: 0;
    }

    ion-icon {
      color: #78757a;
      margin-right: 5px;
    }

    &:hover {
      color: #663399;
    }

    &:first-child,
    &:last-child {
      margin: 0;
    }
  }
`;

export const BottomFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  justify-content: space-between;

  @media (max-width: 750px) {
    display: block;
    text-align: center;
  }
`;

export const Copyright = styled.div`
  font-size: small;
  color: #848383;
`;
