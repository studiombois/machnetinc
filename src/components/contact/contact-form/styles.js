import styled from 'styled-components';

export const Error = styled.span`
  color: #ff4136;
`;

export const Center = styled.div`
  text-align: left;
  padding: 0 15px; 

  h4 {
    font-weight: normal;
    color: #5ab543;
  }
`;

export const InputField = styled.div`
  padding:0 1rem;
  position: relative;
  margin-bottom: 1rem;
  flex:1;
  justify-content: center;
  
  @media (max-width: 767px) {
    flex: auto;
    flex-grow: 1;
  }
`;

export const Row = styled.div`
  position: relative;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
`;
