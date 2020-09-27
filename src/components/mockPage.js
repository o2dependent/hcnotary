import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import colors from '../helpers/colors'

export default function MockPage() {
	return (
		<MockPageContainer
			initial={{ x: `200%`, rotate: -15 }}
			animate={{ x: 0, rotate: 0 }}
			transition={{ duration: 2, type: 'spring' }}
		>
			<div>
				<TitleBar
					initial={{ width: 0 }}
					animate={{ width: '100%' }}
					transition={{ duration: 1, delay: 0.1 }}
					dark
				/>
				{Array(3)
					.fill()
					.map((x, i) =>
						i !== 2 ? (
							<TextBar
								dark
								initial={{ width: 0 }}
								animate={{ width: '100%' }}
								transition={{
									duration: 1,
									delay: 0.15 * i,
								}}
							/>
						) : (
							<TextBar
								dark
								short
								initial={{ width: 0 }}
								animate={{ width: '75%' }}
								transition={{ duration: 1, delay: 0.15 * i }}
							/>
						)
					)}
			</div>
			<div>
				<Box
					dark
					initial={{ x: `200%`, rotate: 75 }}
					animate={{ x: 0, rotate: 0 }}
					transition={{
						duration: 2,
						delay: 0.1,
						type: 'spring',
					}}
				/>
			</div>
			<div>
				<Box
					dark
					initial={{ x: `-200%`, rotate: -95 }}
					animate={{ x: 0, rotate: 0 }}
					transition={{ duration: 2, delay: 0.15, type: 'spring' }}
				/>
			</div>
			<div>
				<TitleBar
					initial={{ width: 0 }}
					animate={{ width: '100%' }}
					transition={{ duration: 1, delay: 0.2 }}
					dark
				/>
				{Array(5)
					.fill()
					.map((x, i) =>
						i !== 4 ? (
							<TextBar
								dark
								initial={{ width: 0 }}
								animate={{ width: '100%' }}
								transition={{ duration: 1, delay: 0.2 * i }}
							/>
						) : (
							<TextBar
								dark
								short
								initial={{ width: 0 }}
								animate={{ width: '75%' }}
								transition={{ duration: 1, delay: 0.22 * i }}
							/>
						)
					)}
			</div>
			<div>
				<TitleBar
					initial={{ width: 0 }}
					animate={{ width: '100%' }}
					transition={{ duration: 1, delay: 0.3 }}
					dark
				/>
				{Array(5)
					.fill()
					.map((x, i) =>
						i !== 4 ? (
							<TextBar
								dark
								initial={{ width: 0 }}
								animate={{ width: '100%' }}
								transition={{ duration: 1, delay: 0.15 * i }}
							/>
						) : (
							<TextBar
								dark
								short
								initial={{ width: 0 }}
								animate={{ width: '75%' }}
								transition={{ duration: 1, delay: 0.1 * i }}
							/>
						)
					)}
			</div>
			<div>
				<Box
					dark
					initial={{ x: `200%`, rotate: 45 }}
					animate={{ x: 0, rotate: 0 }}
					transition={{ duration: 2, type: 'spring' }}
				/>
			</div>
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
	grid-template-rows: 0.5fr 1.5fr 1fr;
	justify-content: center;
	overflow: hidden;
	@media only screen and (max-width: 768px) {
		width: 120%;
		height: 90%;
		position: absolute;
		top: 0;
		left: -10%;
		opacity: 0.2;
	}
`
const TitleBar = styled(motion.div)`
	margin-bottom: 0.5vh;
	height: 4vh;
	width: 100%;
	background: ${props => (props.dark ? colors.orange : colors.white)}EE;
`

const TextBar = styled(motion.div)`
	margin-bottom: 0.5vh;
	height: 2vh;
	width: ${props => (props.short ? `70%` : `100%`)};
	background: ${props => (props.dark ? colors.orange : colors.white)}BB;
`

const Box = styled(motion.div)`
	height: 100%;
	width: 100%;
	background: ${props => (props.dark ? colors.orange : colors.white)}AA;
`
