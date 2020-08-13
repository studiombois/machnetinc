import styled from 'styled-components';

import Team from 'assets/img/team.png';

export const Wrapper = styled.div`
  padding: 0;
  z-idex: 999;
  width: 100%;
  position: absolute;
`;
  
export const Details = styled.div`
  margin: auto;
  padding: 3rem 15px;
  background: #3196d4;
  border-bottom-left-radius: 21px;
  border-top-right-radius: 21px;
  border-bottom-right-radius: 21px;
  background-image: url(${Team});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  h1 {
    color: #fff;
    font-size: 1.3rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`;

export const RequestDemo = styled.button`
  padding: 5px 18px;
	width: fit-content;
	background: transparent;
	border-radius: 16px;
	cursor: pointer;
  color: #fff !important;
  display: block;
  margin: auto;
	border: 1px solid #fff;

	&:hover {
		color: #3573b9 !important;
		background: #fff;
	}
`;