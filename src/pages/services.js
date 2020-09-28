import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {
	Button,
	Content,
	GridContainer,
	Container,
	ButtonGrid,
	AsideThrow,
} from '../components/pageComponents'
import { graphql } from 'gatsby'
import Polaroid from '../components/polaroid'

const AboutPage = ({ data }) => {
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
					<ButtonGrid>
						<Button color={color} to='/services'>
							See my services
						</Button>
						<Button color={color} to='/contact'>
							Contact Me
						</Button>
					</ButtonGrid>
				</GridContainer>
				<AsideThrow
					style={{ top: `20%` }}
					initial={{ x: `200%`, rotate: -15 }}
					animate={{ x: 0, rotate: 0 }}
					transition={{ duration: 2, type: 'spring' }}
				>
					<Polaroid />
				</AsideThrow>
			</Container>
		</Layout>
	)
}

export const data = graphql`
	query ServicesContentQuery {
		markdownRemark(frontmatter: { page: { eq: "services" } }) {
			html
			frontmatter {
				color
			}
		}
	}
`

export default AboutPage
