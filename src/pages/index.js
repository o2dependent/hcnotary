import React from 'react'

import Layout from '../components/layout'
import MockPage from '../components/mockPage'
import SEO from '../components/seo'
import colors from '../helpers/colors'
import {
	Button,
	PageContent,
	PageTitle,
	GridContainer,
	Container,
} from '../components/pageComponents'

const color = colors.orange

const IndexPage = () => (
	<Layout color={color}>
		<SEO title='Home' />
		<Container>
			<GridContainer
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<PageTitle>Web Development made easy</PageTitle>
				<PageContent>
					Our team of dedicated developers are always ready to add, fix, and
					maintain features on your site,
				</PageContent>
				<Button color={color} to='/about'>
					About Us
				</Button>
			</GridContainer>
			<MockPage />
		</Container>
	</Layout>
)

export default IndexPage
