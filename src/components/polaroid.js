import { motion } from 'framer-motion'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import colors from '../helpers/colors'
import { ButtonA, ButtonGrid } from './pageComponents'

export default function Polaroid({ fluid, fixed, title, color, about }) {
	return (
		<Frame title={title}>
			<Image fluid={fluid} />
			{fixed && (
				<TopRight>
					<Img fixed={fixed} />
				</TopRight>
			)}
		</Frame>
	)
}

const Frame = styled(motion.div)`
	width: ${props => (props.title ? '100%' : '80%')};
	position: relative;
	height: fit-content;
	padding: 2vmin;
	padding-bottom: ${props => (props.title ? '10%' : '20%')};
	background: ${colors.white};
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	@media only screen and (max-width: 768px) {
		width: 100%;
	}
`

const TopRight = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(40%, -40%) rotate(15deg);
`

const Title = styled.p`
	width: 100%;
	font-weight: 500;
`

const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 3rem;
	width: 100%;
`

const ImageWrapper = styled.div`
	position: relative;
	width: 100%;
	height: fit-content;
	&::before {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		box-shadow: inset 2px 1px 15px rgba(0, 0, 0, 0.25);
		-moz-box-shadow: inset 2px 1px 15px rgba(0, 0, 0, 0.25);
		-webkit-box-shadow: inset 2px 1px 15px rgba(0, 0, 0, 0.25);
	}
`

const Image = ({ fluid }) => (
	<ImageWrapper>
		<Img fluid={fluid} />
	</ImageWrapper>
)
