import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import colors from '../helpers/colors'

export default function Polaroid({ src, title }) {
	return (
		<Frame title={title}>
			<Img src={src} />
			{title ? <p>{title}</p> : null}
		</Frame>
	)
}

const Frame = styled(motion.div)`
	width: ${props => (props.title ? '100%' : '80%')};
	height: fit-content;
	padding: 2vmin;
	padding-bottom: ${props => (props.title ? '10%' : '20%')};
	background: ${colors.white};
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	@media only screen and (max-width: 768px) {
		width: 100%;
	}
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

const Image = styled.img`
	width: 100%;
	margin: 0 auto;
	margin-bottom: -5px;
`

const Img = ({ src }) => (
	<ImageWrapper>
		<Image src={src} />
	</ImageWrapper>
)
