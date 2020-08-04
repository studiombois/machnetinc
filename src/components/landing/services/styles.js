import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #3573b9;
  padding: 3.5rem 0;
  border-top-left-radius: 21px;
  margin-top: 115px;

  h1 {
    font-size: 25px;
    color: #fff;
    text-align: center;
  }
`;

export const FeaturesRowOne = styled.div`
  padding: 2.4rem 1rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: -185px;
`;

export const FeaturesRowTwo = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2.4rem 1rem;
  justify-content: space-around;
`;
  
export const Feature = styled.div`
  padding:15px;
  width:220px;
  border-bottom-left-radius: 21px;
  border-top-right-radius: 21px;
  border-bottom-right-radius: 21px;
  background-color: #fff;
  margin-bottom: 25px;

  h1 {
    font-size: 16px;
    text-align:center;
    margin-bottom: 10px;
    color: #3673b9;
  }

  p {
    text-align:center;
    font-size:small;
    color: #484848;
  }
}
`;

export const Icon = styled.div`
  width: 50px;
  height: 50px;
  padding: 12px;
  margin: auto;
  overflow: hidden;
  border-radius: 50%;
  background: #bed2e9;
  margin-bottom: 20px;

  margin-top:-50px;

  img {
    width: 100%;
    margin: auto;
    display: block; 
  }
`;