import React from 'react'

import Layout from '../components/layout'
import MockPage from '../components/mockPage/mockPage'
import SEO from '../components/seo'
import {
	Button,
	Content,
	GridContainer,
	Container,
	AsideThrow,
} from '../components/pageComponents'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
	const { markdownRemark } = data
	const { html } = markdownRemark
	const color = markdownRemark.frontmatter.color

	return (
		<Layout color={color}>
			<SEO title='Home' />
			<Container>
				<GridContainer
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<Content dangerouslySetInnerHTML={{ __html: html }} />
					<Button color={color} to='/about'>
						About Me
					</Button>
				</GridContainer>
				<AsideThrow
					initial={{ x: `200%`, rotate: -15 }}
					animate={{ x: 0, rotate: 0 }}
					transition={{ duration: 2, type: 'spring' }}
				>
					<MockPage color={color} />
				</AsideThrow>
			</Container>
		</Layout>
	)
}

export const data = graphql`
	query IndexContentQuery {
		markdownRemark(frontmatter: { page: { eq: "index" } }) {
			html
			frontmatter {
				color
			}
		}
	}
`

export default IndexPage
