import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 6rem 0 3rem 0;

  @media (max-width: 481px) {
    padding: 3rem 0 0 0;
  }

   h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 0.5rem;

    @media (max-width: 481px) {
      text-align: left;  
      font-size: x-large;
    }
  }
  
  p {
    text-align: center;
    color: #647281;
    font-size: 1.2rem;
    margin-bottom: 2rem;

    @media (max-width: 481px) {
      text-align: left;  
    }
  }
`;
  
export const Background = styled.div`
  /* background by SVGBackgrounds.com */
  background-color: #f6f6f6;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(240)'%3E%3Cstop offset='0' stop-color='%23f6f6f6'/%3E%3Cstop offset='1' stop-color='%23f6f6f6'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='540' height='450' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.01'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
`;

export const Form = styled.div`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;
  
export const Details = styled.div`
  flex: 1;
  margin: auto;
  padding: 3rem 0; 
  min-width: 550px; 

  @media (max-width: 768px) {
    min-width: auto; 
  }
  
  @media (max-width: 481px) {
    padding: 0; 
  }

  h1 {
    text-align: left;
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2.2rem;
  }

  p {
    text-align: left;
    color: #3196d4;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
`;

export const TabGrid = styled.div`
  flex: 1;
  align-self:center;
  grid-gap: 0;
  display: none;
  margin-bottom: 3rem;
  padding: 0 8rem 0 6rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  @media (max-width: 768px) {
    display: grid;
  }

  @media (max-width: 481px) {
    padding: 0;
  }
`;

export const DesktopGrid = styled.div`
  flex: 1;
  align-self:center;
  grid-gap: 0;
  display: grid;
  margin-bottom: 3rem;
  padding: 0 8rem 0 6rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  @media (max-width: 768px) {
    display: none;
  }
`;

export const GridTypo = styled.div`
  @media (max-width: 481px) {
    padding: 0;  
  }

  h1 {
    font-weight: 100;
    text-align: left;
    font-size: 25px;
    margin-bottom: 20px;

    @media (max-width: 481px) {
      margin-top: 50px;
      font-size: medium;
    }
  }
`;

export const Item = styled.div`
  display: flex;
  margin: 10px 0;

  @media (max-width: 481px) {
    margin: 5px;
  }

  h1 {
    margin-bottom: 0;
    font-size: 1.0625rem;
    font-weight: bold;
    text-align: left;
  }

  p {
    margin: 0;
    font-size: 1.0625rem;
    text-align: left;
    color: #647281;

    @media (max-width: 481px) {
      font-size: small;
    }
  }

  img {
    width: 20px;
    margin-right: 15px;
    margin-bottom: 10px;
  }
`;

export const Thumbnail = styled.div`
  flex: 1;
  padding: 0 8rem 0 8rem;
  align-self:center;

  h1 {
    text-align: left;
    font-size: 22px;
  }

  @media (max-width: 768px) {
    display: none; 
  }

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`;
