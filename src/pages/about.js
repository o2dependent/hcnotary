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
			file(relativePath: { regex: "/NNA.png/" }) {
				childImageSharp {
					fixed(width: 125, height: 125) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`)
	const { markdownRemark, file } = data
	const { html } = markdownRemark
	const color = markdownRemark.frontmatter.color
	const fluid = markdownRemark.frontmatter.image.childImageSharp.fluid
	const fixed = file.childImageSharp.fixed

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
					<Polaroid fluid={fluid} fixed={fixed} />
				</AsideThrow>
			</Container>
		</Layout>
	)
}

export default AboutPage
