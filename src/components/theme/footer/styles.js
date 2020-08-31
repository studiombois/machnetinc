import styled from 'styled-components';

export const Wrapper = styled.div `
  background: #3597d4;
  padding: 2rem 0;

  @media (max-width: 1960px) {
    padding: 2rem 0;
  }

  hr {
    background: #e6e6e6;
  }
`;

export const TopFooter = styled.div `
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 30px !important;
  justify-content: space-between;

  @media (max-width: 750px) {
    display: block;
  }
`;

export const Brand = styled.div `
  p {
    margin: 0;
    color: #fff;
    font-size: small;
    line-height: 20px;
  }

  @media (max-width: 750px) {
    max-width: 100%;
    text-align: center;
  }
`;

export const RightMenu = styled.div `
  display: flex;

  @media (max-width: 750px){
    display: block;
    text-align: center;
	}
`;

export const Links = styled.div `
  color: #fff;
  text-align: left;
  font-size: ${({varient}) => varient};

  @media (max-width: 750px) {
    margin: 5px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
  
  a {
    color: #fff;
    margin: 0 0.5rem;
    font-size: small;

    &:hover {
      color: #8aeff1;
    }

    @media (max-width: 750px) {
      display: block;
      padding: 5px;
    }
  }
`;

export const BottomFooter = styled.div `
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  justify-content: space-between;

  @media (max-width: 750px) {
    display: block;
    text-align: center;
  }
`;

export const Copyright = styled.div `
  color: #fff;
  margin-top: 5px;
  font-size: small;
`;