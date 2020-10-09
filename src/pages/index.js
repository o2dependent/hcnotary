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
import { graphql, useStaticQuery } from 'gatsby'

const IndexPage = () => {
	const data = useStaticQuery(graphql`
		query IndexContentQuery {
			markdownRemark(frontmatter: { page: { eq: "index" } }) {
				html
				frontmatter {
					color
				}
			}
		}
	`)
	const { markdownRemark } = data
	const { html } = markdownRemark
	const color = markdownRemark.frontmatter.color

	return (
		<Layout key='page' color={color}>
			<SEO title='Home' />
			<Container>
				<GridContainer>
					<Content dangerouslySetInnerHTML={{ __html: html }} />
					<Button color={color} to='/about'>
						About Me
					</Button>
				</GridContainer>
				<AsideThrow
					initial={{ y: `100vh`, rotate: 25 }}
					animate={{ y: 0, rotate: 0 }}
					transition={{ stiffness: 50, dampening: 5, type: 'spring' }}
				>
					<MockPage color={color} />
				</AsideThrow>
			</Container>
		</Layout>
	)
}

export default IndexPage
