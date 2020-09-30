import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Button, Content, ButtonGrid } from '../components/pageComponents'
import { graphql } from 'gatsby'
import Polaroid from '../components/polaroid'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const AboutPage = ({ data }) => {
	const { markdownRemark, allMarkdownRemark } = data
	const { html } = markdownRemark
	const color = markdownRemark.frontmatter.color
	const edits = allMarkdownRemark.edges
	console.log(edits)

	return (
		<Layout color={color}>
			<SEO title='Edit' />
			<Container>
				<Content dangerouslySetInnerHTML={{ __html: html }} />
				<ImageGrid color={color}>
					{edits.map((e, i) => (
						<motion.div
							initial={{ y: '100vh' }}
							animate={{ y: 0 }}
							transition={{
								type: 'spring',
								bounce: 0.25,
								damping: 100,
								delay: i * 0.05,
							}}
						>
							<Polaroid
								src={e.node.frontmatter.image}
								title={e.node.frontmatter.title}
							/>
						</motion.div>
					))}
				</ImageGrid>
				<ButtonGrid>
					<Button color={color} to='/contact'>
						Contact Me
					</Button>
				</ButtonGrid>
			</Container>
		</Layout>
	)
}

const Container = styled.div`
	position: relative;
	justify-self: center;
	display: flex;
	flex-direction: column;
	width: 80%;
	height: 100%;
	margin: 5vh auto;
	flex-grow: 1;
	@media only screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr;
	}
`

const ImageGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 1rem;
	margin-bottom: 1rem;
	@media only screen and (max-width: 1060px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media only screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}
	& * {
		color: ${props => props.color};
		& p {
			margin: 0;
			margin-top: 0.5rem;
			font-size: 1.25rem;
		}
	}
`

export const data = graphql`
	query EditContentQuery {
		markdownRemark(frontmatter: { page: { eq: "edit" } }) {
			html
			frontmatter {
				color
			}
		}
		allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/edits/" } }) {
			edges {
				node {
					frontmatter {
						title
						image
					}
				}
			}
		}
	}
`

export default AboutPage
