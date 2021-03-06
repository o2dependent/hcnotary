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
import { graphql, useStaticQuery } from 'gatsby'
import Polaroid from '../components/polaroid'

const AboutPage = () => {
	const data = useStaticQuery(graphql`
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
	`)
	const { markdownRemark } = data
	const { html, frontmatter } = markdownRemark
	const { color, image } = frontmatter

	return (
		<Layout color={color}>
			<SEO title='About' />
			<Container>
				<GridContainer>
					<Content dangerouslySetInnerHTML={{ __html: html }} />
					<ButtonGrid>
						<Button color={color} to='/contact'>
							Contact Me
						</Button>
					</ButtonGrid>
				</GridContainer>
				<AsideThrow
					initial={{ y: `100vh`, rotate: -45 }}
					animate={{ y: 0, rotate: 0 }}
					transition={{ stiffness: 50, type: 'spring' }}
				>
					<Polaroid fluid={image.childImageSharp.fluid} />
				</AsideThrow>
			</Container>
		</Layout>
	)
}

export default AboutPage
