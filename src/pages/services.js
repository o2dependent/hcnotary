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
	const { markdownRemark } = data
	const { html } = markdownRemark
	color = markdownRemark.frontmatter.color
	const services = markdownRemark.frontmatter.service_cards

	return (
		<Layout key='page' color={color}>
			<SEO title='Services' />
			<ServiceContainer>
				<GridContainer>
					<Content dangerouslySetInnerHTML={{ __html: html }} />
					<ButtonGridLarge>
						<Button color={color} to='/projects'>
							My projects
						</Button>
						<Button color={color} to='/contact'>
							Contact Me
						</Button>
					</ButtonGridLarge>
				</GridContainer>
				<ServiceCardContainer>
					{services.map((s, i) => (
						<ServiceCard
							color={color}
							initial={{ x: `100vw` }}
							animate={{ x: 0 }}
							transition={{
								stiffness: 50,
								dampening: 7,
								type: 'spring',
								delay: 0.05 * i,
							}}
						>
							<h1>{s.title}</h1>
							<p>{s.content}</p>
						</ServiceCard>
					))}
				</ServiceCardContainer>
				<ButtonGridSmall>
					<Button color={color} to='/projects'>
						My projects
					</Button>
					<Button color={color} to='/contact'>
						Contact Me
					</Button>
				</ButtonGridSmall>
			</ServiceContainer>
		</Layout>
	)
}

const ButtonGridSmall = styled(ButtonGrid)`
	@media only screen and (min-width: 768px) {
		display: none;
	}
`

const ButtonGridLarge = styled(ButtonGrid)`
	@media only screen and (max-width: 768px) {
		display: none;
	}
`

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
		width: 100%;
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
				service_cards {
					content
					title
				}
			}
		}
	}
`

export default AboutPage
