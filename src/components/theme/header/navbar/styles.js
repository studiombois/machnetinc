import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: 2.5rem 0;
  align-items: center;
  justify-content: space-between;
`;

export const Brand = styled.a`
  color: ${({ theme }) => (theme === 'light' ? '#fff' : '#fff')};
  margin-top:15px;

  @media (max-width: 680px) {
    margin-top:0;
  }

  @media (max-width: 960px) {
    mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
  }
`;
