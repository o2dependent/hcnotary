import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Button, Content, ButtonGrid } from '../components/pageComponents'
import { graphql } from 'gatsby'
import Polaroid from '../components/polaroid'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ProjectsPage = ({ data }) => {
	const { markdownRemark } = data
	const { html } = markdownRemark
	const color = markdownRemark.frontmatter.color
	const projects = markdownRemark.frontmatter.projects

	return (
		<Layout color={color}>
			<SEO title='Projects' />
			<Container>
				<Content dangerouslySetInnerHTML={{ __html: html }} />
				<ImageGrid color={color}>
					{projects.map((p, i) => (
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
								fluid={p.image.childImageSharp.fluid}
								title={p.title}
								color={color}
								linkTo={p.linkTo}
								gitHub={p.gitHub}
							/>
						</motion.div>
					))}
				</ImageGrid>
				<motion.div
					initial={{ y: '100vh' }}
					animate={{ y: 0 }}
					transition={{
						type: 'spring',
						bounce: 0.25,
						damping: 100,
						delay: projects.length * 0.05,
					}}
				>
					<ButtonGrid>
						<Button color={color} to='/contact'>
							Contact Me
						</Button>
					</ButtonGrid>
				</motion.div>
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
	query ProjectsContentQuery {
		markdownRemark(frontmatter: { page: { eq: "projects" } }) {
			html
			frontmatter {
				color
				projects {
					linkTo
					gitHub
					title
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
	}
`

export default ProjectsPage
