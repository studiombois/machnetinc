import styled from 'styled-components';

export const Wrapper = styled.div`
  a {
		color: #fff;
		font-size: .875rem;
    text-decoration: none;

		@media (max-width: 960px) {
			color: ${({ theme }) => (theme === 'light' ? '#fff' : '#fff')};
		}
  }

  ${({ desktop }) =>
    desktop
      ? `
			align-items: center;
			display: flex;

			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1.5rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`;

export const RequestDemo = styled.button`
  padding: 6px 18px;
	width: fit-content;
	background: #fff;
	border-radius: 16px;
	cursor: pointer;
  color: #3573b9 !important;
  margin: auto;
	display: block;
	border: none;
	

	&:hover {
		background:#eff2fc;
	}
`;