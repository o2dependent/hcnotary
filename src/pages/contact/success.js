import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import colors from '../../helpers/colors'

const ContactSuccess = ({ data }) => {
	const { markdownRemark } = data
	const { html } = markdownRemark
	const color = markdownRemark.frontmatter.color

	return (
		<Layout color={color}>
			<SEO title='Contact' />
			<ContactContainer>
				<ContactContent
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			</ContactContainer>
		</Layout>
	)
}

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

export const data = graphql`
	query ContactSuccessContentQuery {
		markdownRemark(frontmatter: { page: { eq: "contact" } }) {
			html
			frontmatter {
				color
				success
			}
		}
	}
`

export default ContactSuccess
