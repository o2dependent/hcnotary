import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import { Button } from '../components/pageComponents'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import colors from '../helpers/colors'

const AboutPage = ({ data }) => {
	const { markdownRemark } = data
	const { html } = markdownRemark
	const color = markdownRemark.frontmatter.color

	return (
		<Layout color={color}>
			<SEO title='Contact' />
			<ContactContainer
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<ContactContent dangerouslySetInnerHTML={{ __html: html }} />
				<Form>
					<TextInput type='text' placeholder='Name' />
					<TextInput type='text' placeholder='Email' />
					<TextField placeholder='Message' />
					<SubmitButton color={color}>Submit!</SubmitButton>
				</Form>
			</ContactContainer>
		</Layout>
	)
}
const SubmitButton = styled(Button)`
	grid-area: 3 / 1 / 3 / 4;
	margin: 0 auto;
`

const ContactContainer = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	flex-wrap: wrap;
	position: relative;
	justify-self: center;
	width: 80%;
	height: 100%;
	margin: 5vh auto;
	@media only screen and (max-width: 768px) {
	}
`

const ContactContent = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	& h1 {
		font-weight: 300;
		font-size: 3rem;
		margin-bottom: 2rem;
		@media only screen and (max-width: 600px) {
			font-size: 1.75rem;
		}
	}
	& p {
		margin-bottom: 2rem;
		line-height: 2.2rem;
		width: 80%;
		font-size: 1.5rem;
		@media only screen and (max-width: 600px) {
			font-size: 1.1rem;
			width: 100%;
		}
	}
`

const Form = styled.form`
	width: 1000px;
	height: 100%;
	margin-top: 4vh;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-row-gap: 6vh;
	@media only screen and (max-width: 1060px) {
		width: 100%;
	}
	@media only screen and (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`

const TextInput = styled.input`
	padding-top: 0.5rem;
	width: 80%;
	margin: 0 auto;
	background: none;
	border: none;
	border-bottom: 2px solid ${colors.white};
	color: ${colors.white};
	&:focus {
		outline-color: ${colors.white}80;
	}

	@media only screen and (max-width: 1060px) {
		width: 90%;
	}
`

const TextField = styled.textarea`
	grid-area: 2 / 1 / 2 / 4;
	padding-top: 0.5rem;
	width: 90%;
	max-width: 100%;
	margin: 0 auto;
	background: none;
	border: none;
	border-bottom: 2px solid ${colors.white};
	color: ${colors.white};
	&:focus {
		outline-color: ${colors.white}80;
	}
	@media only screen and (max-width: 1060px) {
		width: 90%;
	}
`

export const data = graphql`
	query ContactContentQuery {
		markdownRemark(frontmatter: { page: { eq: "contact" } }) {
			html
			frontmatter {
				color
			}
		}
	}
`

export default AboutPage
