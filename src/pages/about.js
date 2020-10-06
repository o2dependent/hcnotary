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
	const fluid = markdownRemark.frontmatter.image.childImageSharp.fluid

	return (
		<Layout color={color}>
			<SEO title='About' />
			<Container>
				<GridContainer>
					<Content dangerouslySetInnerHTML={{ __html: html }} />
					<ButtonGrid>
						<Button color={color} to='/services'>
							My services
						</Button>
						<Button color={color} to='/contact'>
							Contact
						</Button>
					</ButtonGrid>
				</GridContainer>
				<AsideThrow
					style={{ top: `5vh` }}
					initial={{ x: `100vw`, rotate: -90 }}
					animate={{ x: 0, rotate: 0 }}
					transition={{ stiffness: 50, dampening: 7, type: 'spring' }}
				>
					<Polaroid fluid={fluid} />
				</AsideThrow>
			</Container>
		</Layout>
	)
}

export const data = graphql`
	query AboutContentQuery {
		markdownRemark(frontmatter: { page: { eq: "about" } }) {
			html
			frontmatter {
				color
				image {
					childImageSharp {
						fluid(maxWidth: 500) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`

export default AboutPage
