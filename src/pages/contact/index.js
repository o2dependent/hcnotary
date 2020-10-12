import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import colors from '../../helpers/colors'

const ContactPage = () => {
	const data = useStaticQuery(graphql`
		query ContactContentQuery {
			markdownRemark(frontmatter: { page: { eq: "contact" } }) {
				html
				frontmatter {
					color
				}
			}
		}
	`)
	const { markdownRemark } = data
	const { html } = markdownRemark
	const color = markdownRemark.frontmatter.color

	return (
		<Layout color={color}>
			<SEO title='contact' />
			<ContactContainer>
				<ContactContent
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					dangerouslySetInnerHTML={{ __html: html }}
				/>
				<Form
					name='contact'
					method='POST'
					action='/contact/success'
					data-netlify='true'
					netlify-honeypot='bot-field'
				>
					<input type='hidden' name='bot-field' />
					<TextInput
						initial={{ y: '100vh' }}
						animate={{ y: 0 }}
						transition={{
							type: 'spring',
							bounce: 0.15,
							stiffness: 10000,
							delay: 0.1,
						}}
						type='text'
						id='name'
						name='name'
						placeholder='Name'
						required
					/>
					<TextInput
						initial={{ y: '100vh' }}
						animate={{ y: 0 }}
						transition={{
							type: 'spring',
							bounce: 0.15,
							stiffness: 1000,
							delay: 0.1,
						}}
						type='text'
						id='email'
						name='email'
						placeholder='Email'
						required
					/>
					<TextField
						initial={{ y: '100vh' }}
						animate={{ y: 0 }}
						transition={{
							type: 'spring',
							bounce: 0.15,
							stiffness: 1000,
							delay: 0.2,
						}}
						id='message'
						name='message'
						placeholder='Message'
					/>
					<Button
						initial={{ y: '100vh' }}
						animate={{ y: 0 }}
						transition={{
							type: 'spring',
							bounce: 0.2,
							stiffness: 1000,
							delay: 0.25,
						}}
						color={color}
						type='submit'
					>
						Submit!
					</Button>
				</Form>
			</ContactContainer>
		</Layout>
	)
}
const Button = styled(motion.button)`
	grid-area: 3 / 1 / 3 / 4;
	cursor: pointer;
	margin: 0 auto;
	width: fit-content;
	background: ${colors.white};
	color: ${props => props.color};
	text-decoration: none;
	font-weight: 400;
	font-size: 1.5rem;
	border-radius: 4px;
	padding: 0.5rem 1rem;
	box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
	outline: none;
	border: none;
	&:hover {
		box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
		transform: translate(0, 1px);
		transition: box-shadow 250ms, transform 250ms;
	}
	@media only screen and (max-width: 600px) {
		font-size: 1.1rem;
		grid-area: auto;
	}
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
`

const ContactContent = styled.div`
	width: 1000px;
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
		width: 90%;
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
	font-size: 1.25rem;
	@media only screen and (max-width: 1060px) {
		width: 100%;
	}
	@media only screen and (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`

const TextInput = styled(motion.input)`
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

const TextField = styled(motion.textarea)`
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
	@media only screen and (max-width: 600px) {
		grid-area: auto;
		width: 90% !important;
	}
	@media only screen and (max-width: 1060px) {
		width: 95%;
	}
`

export default ContactPage
