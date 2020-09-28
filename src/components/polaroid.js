import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import colors from '../helpers/colors'
import photo from '../images/about-photo.jpg'

export default function Polaroid() {
	return (
		<Frame>
			<Img src={photo} />
		</Frame>
	)
}

const Frame = styled(motion.div)`
	width: 80%;
	height: fit-content;
	padding: 2vmin;
	padding-bottom: 10vmin;
	margin: 0 auto;
	background: ${colors.white};
`
const Img = styled.img`
	width: 100%;
	margin: 0 auto;
`
