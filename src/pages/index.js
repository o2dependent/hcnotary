import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {
	Button,
	Content,
	GridContainer,
	Container,
	AsideThrow,
} from '../components/pageComponents'
import { graphql, useStaticQuery } from 'gatsby'
import Polaroid from '../components/polaroid'

const IndexPage = () => {
	const data = useStaticQuery(graphql`
		query IndexContentQuery {
			markdownRemark(frontmatter: { page: { eq: "index" } }) {
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
			file(relativePath: { regex: "/LBI.png/" }) {
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
					transition={{ stiffness: 50, type: 'spring' }}
				>
					<Polaroid fluid={fluid} fixed={fixed} />
				</AsideThrow>
			</Container>
		</Layout>
	)
}

export default IndexPage
