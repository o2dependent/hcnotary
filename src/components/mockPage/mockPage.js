import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import colors from '../../helpers/colors'
import MockText from './mockText'
import MockGraph from './mockGraph'

let pageColor = '#FFF'

export default function MockPage({ color }) {
	pageColor = color
	return (
		<MockPageContainer>
			<MockText num={7} delay={0.05} dark />
			<MockGraph num={5} />
			<Box
				dark
				initial={{ x: `-200%`, rotate: -95 }}
				animate={{ x: 0, rotate: 0 }}
				transition={{ duration: 2, delay: 0.15, type: 'spring' }}
			/>
			<MockText num={5} delay={0.2} dark />
		</MockPageContainer>
	)
}

const MockPageContainer = styled(motion.div)`
	padding: 2vh;
	height: 100%;
	max-height: 70vh;
	width: 100%;
	background: ${colors.white};
	display: grid;
	grid-gap: 2vh;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1.5fr 1fr;
	justify-content: center;
	overflow: hidden;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const TitleBar = styled(motion.div)`
	margin-bottom: 0.5vh;
	height: 80%;
	width: 100%;
	background: ${props => (props.dark ? pageColor : colors.white)}EE;
`

const TextBar = styled(motion.div)`
	margin-bottom: 0.5vh;
	height: 65%;
	width: ${props => (props.short ? `70%` : `100%`)};
	background: ${props => (props.dark ? pageColor : colors.white)}BB;
`

const Box = styled(motion.div)`
	height: 100%;
	width: 100%;
	background: ${props => (props.dark ? pageColor : colors.white)}AA;
`

const GraphBar = styled(motion.div)`
	width: 80%;
	margin: 0 auto;
	height: 50%;
	background: ${props => (props.dark ? pageColor : colors.white)}CC;
`

export { TitleBar, TextBar, GraphBar, Box, MockPageContainer }
