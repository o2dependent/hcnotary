import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {
	Button,
	Content,
	GridContainer,
	Container,
	AsideThrow,
	BadgeContainer,
} from '../components/pageComponents'
import Img from 'gatsby-image'
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
					badges {
						image {
							childImageSharp {
								fixed(width: 125, height: 125) {
									...GatsbyImageSharpFixed
								}
							}
						}
					}
				}
			}
		}
	`)
	const { markdownRemark, file } = data
	const { html, frontmatter } = markdownRemark
	const { color, badges } = frontmatter

	return (
		<Layout color={color}>
			<SEO title='Home' />
			<Container>
				<GridContainer>
					<Content dangerouslySetInnerHTML={{ __html: html }} />
					<BadgeContainer>
						{badges.map(b => (
							<Img fixed={b.image.childImageSharp.fixed} />
						))}
					</BadgeContainer>
					<Button color={color} to='/about'>
						About Me
					</Button>
				</GridContainer>
				<AsideThrow
					initial={{ y: `100vh`, rotate: 25 }}
					animate={{ y: 0, rotate: 0 }}
					transition={{ stiffness: 50, type: 'spring' }}
				>
					<Polaroid />
				</AsideThrow>
			</Container>
		</Layout>
	)
}

export default IndexPage
