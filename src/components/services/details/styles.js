import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1rem 10px;

   p {
    min-width: 100%;
    padding: 1rem 0;
    font-size: 15px !important;
    color: #5e626b !important;
  }
`;

export const Title = styled.div`
  display: flex;

  h1 {
    font-weight: 100;
    width: max-content;
    display: inline-block;
  }
  
  img {
    width: 25px;
    margin-right: 10px;
    display: inline-block;
  }
`;

export const Content = styled.div`
  padding: 0;
  display: flex;
  flex-flow: row wrap;
`;

export const Column = styled.div`
  flex: 1;
  padding: 25px;
  font-size: 15px;
  line-height: 25px;
  color: #5e626b !important;;

  @media (max-width: 420px) {
    padding: 0;
    min-width: 100%;
  }
  
  &:first-child {
    padding-left: unset;
  }

	&:last-child {
    padding-right: unset;

    @media (max-width: 372px) {
      margin-top: 30px;
    }
  }
  
  h1 {
    font-weight: bold;
    font-family: 'Righteous', cursive;
    color: #fff;
    background: #7a7a7a;
    padding: 9px 0;
    width: max-content;
    border-radius: 6px;
    margin: auto;
    margin-bottom: 20px !important;
    width: 54px !important;
    text-align: center !important;
  }

  table {
    width: 80%;
    color: #727272;
    padding: 8px 20px;
    margin-bottom: 30px; 
    box-shadow: 0px 4px 10px #18181838;
    
    tr {
      td{
        padding: 5px 15px;
        font-size: 12px;
      } 
    }
  }
`;

export const LinkYourBank = styled.div`
  max-width: 80%;
  padding: 8px 20px;
  margin-bottom: 30px; 
  box-shadow: 0px 4px 10px #18181838;

  @media (max-width: 750px) {
    max-width: 100%;;
  }

  p {
    margin: 0;
    font-weight: bold;
    font-size: 15px;
  }
`;

export const Loader = styled.div`
  display: block;
  padding: 10px 0;
  margin-bottom: 10px;
  background: #eaeaea;
  width: ${({width}) => width};
`;

export const Box = styled.div`
  padding: 20px;
  border-radius: 3px;
  margin: 0 0 20px 0;
  background-image: linear-gradient(to bottom right, #b0b0b0, #606060);

  p {
    padding: 0;
    color: #fff !important;
    font-weight: 400;
    font-size: 15px;
  }

  h1 {
    padding: 0;
    width: 100% !important;
    background: none;
    text-align: left !important;
    font-family: 'Inter',sans-serif;
  }
`;

export const BoxFooter = styled.div`
  color: #fff;
  display: flex;
  margin-top: 8rem;

  img {
    width: 30px;
    height: 30px;
    padding: 6px;
    background: #fff;
    border-radius: 50%;
    margin: 0 10px;
  }
`;

export const BankNetwork = styled.div`
  max-width: 400px;
  padding: 60px 24px;
  border-radius: 3px;
  margin: 0px 0 20px 0;
  box-shadow: 0px 4px 10px #18181847;
`;

export const CardNetwork = styled.div`
  padding: 40px 0;
  max-width: 400px;
  border-radius: 3px;
  margin: 0px 0 20px 0;
  box-shadow: 0px 4px 10px #18181847;

  img {
    display: block;
    margin: auto;
  }
`;

export const Thumbnail = styled.div`
  padding: 40px 0;
  max-width: 400px;
  border-radius: 3px;
  margin: 0px 0 20px 0;

  img {
    width: 140px;
    display: block;
    margin: auto;
  }
`;

export const RiskAndFraudThumbnail = styled.img`
  padding: 0 100px;

  @media (max-width: 750px) {
    padding: 0 20px; 
  }
`;