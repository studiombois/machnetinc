import React from 'react';
import styled from 'styled-components';

import { Layout, SEO, Container } from '@ui';

import PageHeader from 'components/page/page-title';

export default () => (
	<Layout>
		<SEO />
		<PageHeader />
		<Container>
			<AboutUs>
				<h1>About Us</h1>
			</AboutUs>
		</Container>
	</Layout>
);

const AboutUs = styled.div`
  h1 {
    font-weight: 100;
    width: max-content;
    display: inline-block;
  }
`;
