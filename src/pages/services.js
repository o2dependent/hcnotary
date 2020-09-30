import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {
	Button,
	Content,
	GridContainer,
	Container,
	ButtonGrid,
} from '../components/pageComponents'
import { graphql } from 'gatsby'
import style from 'styled-components'
import { motion } from 'framer-motion'
import colors from '../helpers/colors'
import styled from 'styled-components'

let color = '#fff'

const AboutPage = ({ data }) => {
	const { markdownRemark, allMarkdownRemark } = data
	const { html } = markdownRemark
	color = markdownRemark.frontmatter.color
	const services = allMarkdownRemark.edges[0].node.frontmatter.services
	console.log(services)

	return (
		<Layout color={color}>
			<SEO title='Services' />
			<ServiceContainer>
				<GridContainer
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<Content dangerouslySetInnerHTML={{ __html: html }} />
					<ButtonGrid>
						<Button color={color} to='/edit'>
							My edits
						</Button>
						<Button color={color} to='/contact'>
							Contact Me
						</Button>
					</ButtonGrid>
				</GridContainer>
				<ServiceCardContainer>
					{services.map((s, i) => (
						<ServiceCard
							color={color}
							initial={{ x: `200%` }}
							animate={{ x: `0%` }}
							transition={{
								duration: 1.5,
								type: 'spring',
								delay: 0.1 + 0.1 * i,
							}}
						>
							<h1>{s.title}</h1>
							<p>{s.body}</p>
						</ServiceCard>
					))}
				</ServiceCardContainer>
			</ServiceContainer>
		</Layout>
	)
}

const ServiceContainer = styled(Container)`
	@media only screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
	}
`

const ServiceCardContainer = style.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
`

const ServiceCard = style(motion.div)`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-content: center;
	margin-bottom: 1rem;
	background: ${colors.white};
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	padding: 3vmin;
	& h1 {
		width: 100%;
		font-weight: 300;
		font-size: 2rem;
		margin: 0.5rem auto;
		color: ${props => props.color};
		font-weight: 400;
		@media only screen and (max-width: 600px) {
			font-size: 1.75rem;
		}
	}
	& p {
		margin-bottom: 2rem;
		line-height: 2.2rem;
		width: 90%;
		font-size: 1.2rem;
		margin: 0 auto;
		color: ${props => props.color};
		@media only screen and (max-width: 600px) {
			font-size: 1.1rem;
			width: 100%;
		}
	}
`

export const data = graphql`
	query ServicesContentQuery {
		markdownRemark(frontmatter: { page: { eq: "services" } }) {
			html
			frontmatter {
				color
			}
		}
		allMarkdownRemark(filter: { frontmatter: { page: { eq: "services" } } }) {
			edges {
				node {
					frontmatter {
						services {
							title
							body
						}
					}
				}
			}
		}
	}
`

export default AboutPage
