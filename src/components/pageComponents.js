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
		grid-template-rows: 1fr;
	}
`

const GridContainer = styled(motion.div)`
	height: 100%;
	width: 100%;
	@media only screen and (max-width: 768px) {
		z-index: 1;
		margin-top: 10%;
	}
`

const Content = styled.div`
	& h1 {
		font-weight: 300;
		font-size: 3rem;
		font-size: clamp(2rem, 3.5vw, 3rem);
		margin-bottom: 2rem;
	}
	& p {
		margin-bottom: 2rem;
		line-height: 2.2rem;
		width: 80%;
		font-size: clamp(1.1rem, 2.5vw, 1.5rem);
		@media only screen and (max-width: 600px) {
			width: 100%;
		}
	}
`

const Button = styled(Link)`
	width: fit-content;
	background: ${colors.white};
	color: ${props => props.color};
	text-decoration: none;
	font-weight: 400;
	font-size: 1.5rem;
	border-radius: 4px;
	padding: 0.5rem 1rem;
	box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
	transition: box-shadow 250ms, transform 250ms;
	margin-right: 3rem;
	&:hover {
		box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
		transform: translate(0, 1px);
	}
	@media only screen and (max-width: 600px) {
		font-size: 1.1rem;
	}
`

const ButtonA = styled.a`
	width: fit-content;
	height: fit-content;
	position: relative;
	text-decoration: none;
	font-weight: 400;
	font-size: 1rem;
	border-radius: 4px;
	padding: 0.5rem 0;
	transition: box-shadow 250ms, transform 250ms;
	margin-right: 3rem;
	&:hover {
		&::after {
			height: 5px;
			bottom: 3px;
		}
	}
	&::after {
		content: '';
		width: 100%;
		height: 1px;
		position: absolute;
		background: ${props => props.color};
		bottom: 7px;
		left: 0;
		transition: 100ms;
	}
	@media only screen and (max-width: 600px) {
		font-size: 1rem;
	}
`

const ButtonGrid = styled.div`
	display: flex;
	width: 100%;
	margin-bottom: 1rem;
`

const AsideThrow = styled(motion.div)`
	height: 100%;
	width: 100%;
	@media only screen and (max-width: 768px) {
		width: 116%;
		height: 90%;
		max-height: 90%;
		position: absolute;
		top: 0;
		left: -8%;
		opacity: 0.2;
		grid-template-rows: 1fr 1fr;
	}
`

export {
	Button,
	ButtonA,
	GridContainer,
	Container,
	Content,
	ButtonGrid,
	AsideThrow,
}
