import { motion } from 'framer-motion'
import { Link } from 'gatsby'
import styled from 'styled-components'
import colors from '../helpers/colors'

const Container = styled.div`
	position: relative;
	justify-self: center;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 100%;
	width: 80%;
	height: 100%;
	margin: 5vh auto;
	flex-grow: 1;
	@media only screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`

const GridContainer = styled(motion.div)`
	height: 100%;
	width: 100%;
	margin-top: 20%;
	@media only screen and (max-width: 768px) {
		z-index: 1;
	}
`

const PageTitle = styled.h1`
	font-weight: 300;
	font-size: 3rem;
	margin-bottom: 2rem;
	@media only screen and (max-width: 600px) {
		font-size: 1.75rem;
	}
`

const PageContent = styled.p`
	margin-bottom: 2rem;
	line-height: 2.2rem;
	width: 80%;
	font-size: 1.5rem;
	@media only screen and (max-width: 600px) {
		font-size: 1.1rem;
		width: 100%;
	}
`

const Button = styled(Link)`
	background: ${colors.white};
	color: ${props => props.color};
	text-decoration: none;
	font-weight: 400;
	font-size: 1.5rem;
	border-radius: 4px;
	padding: 0.5rem 1rem;
	@media only screen and (max-width: 600px) {
		font-size: 1.1rem;
	}
`

export { Button, PageContent, PageTitle, GridContainer, Container }
