import styled from 'styled-components';

export const Wrapper = styled.div`
  a {
		color: ${({variant}) => variant ==='light'?'#fff':'#2964a7'};
		font-size: .875rem;
    text-decoration: none;

		@media (max-width: 960px) {
			color: #424242;
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
			@media (max-width: 960px) {
				padding: 4rem 2rem;
			}

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`;

export const RequestDemo = styled.button`
  padding: 5px 18px;
	width: fit-content;
	background: transparent;
	border-radius: 16px;
	cursor: pointer;
  color: #fff !important;
  margin: auto;
	display: block;
	border: 1px solid #fff;

	&:hover {
		color: #3573b9 !important;
		background: #fff;
	}
`;