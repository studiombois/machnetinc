import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1rem 10px;

   p {
    min-width: 100%;
    padding: 0;
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
  padding: 0 25px;
  font-size: 15px;
  line-height: 25px;
  margin-bottom: 20px;
  color: #5e626b !important;

  @media (max-width: 481px) {
    padding: 0;
    min-width: 100%;
  }
  
  &:first-child {
    padding-left: unset;
  }

	&:last-child {
    padding-right: unset;

    @media (max-width: 481px) {
      margin-top: 30px;
    }

    @media (max-width: 768px) {
      padding-right: 25px;
      padding-left: unset;
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
`;

export const Table = styled.div`
  @media(max-width: 481px) {
    overflow-x: auto;
  }

  table {
    width: 80%;
    height: 445px;
    color: #727272;
    padding: 8px 20px;
    margin-bottom: 30px; 
    box-shadow: 0px 4px 10px #18181838;
    
    @media (max-width: 768px) {
      width: 100%;
    }

    tr {
      td{
        padding: 5px 15px;
        font-size: 12px;

        @medis(max-width: 481px) {
          padding: 5px 12px;
        }
      } 
    }
  }
`;

export const LinkYourBank = styled.div`
  height: 445px;
  max-width: 80%;
  min-width: 330px;
  padding: 8px 20px;
  margin-bottom: 30px;
  position: relative; 
  box-shadow: 0px 4px 10px #18181838;
  display: flex; 
  flex-direction: column; 

  @media (max-width: 768px) {
    max-width: 100%;;
  }

  @media (max-width: 481px) {
    min-width: 100%;;
  }

  p {
    font-weight: bold;
    font-size: 15px;
    margin-top: 10px;
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
  flex-grow: 1;
  padding: 20px;
  margin: 20px 0;
  border-radius: 3px;
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
  margin-top: 40px;

  img {
    width: 30px;
    height: 30px;
    padding: 6px;
    background: #fff;
    border-radius: 50%;
    margin: 0 10px;
  }
`;

export const CardNetwork = styled.div`
  img {
    width: 80%;
    display: block;
    margin-left: 0;
  }
`;

export const Thumbnail = styled.div`
  padding: 0;
  max-width: 50px;
  border-radius: 3px;
  margin: 20px 0 20px 0;

  img {
    width: 140px;
    display: block;
    margin: auto;
  }
`;

export const RiskAndFraudThumbnail = styled.img`
  padding: 50px 0;
  display: block;
  margin: auto;
  width: 700px;

  @media (max-width: 768px) {
    padding: 0; 
  }
`;