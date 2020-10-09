import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Confetti from 'react-confetti'

const ContactSuccess = () => {
	const data = useStaticQuery(graphql`
		query ContactSuccessContentQuery {
			markdownRemark(frontmatter: { page: { eq: "contact" } }) {
				html
				frontmatter {
					color
					success
				}
			}
		}
	`)
	const { markdownRemark } = data
	const color = markdownRemark.frontmatter.color
	const success = markdownRemark.frontmatter.success

	return (
		<Layout color={color}>
			<SEO title='Contact' />
			<Confetti
				width={window.innerWidth || 200}
				height={window.innerHeight || 200}
			/>
			<ContactContainer>
				<ContactContent>
					<h1>{success}</h1>
				</ContactContent>
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
	flex-grow: 1;
`

const ContactContent = styled.div`
	width: 90%;
	max-width: 1000px;
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
`

export default ContactSuccess
