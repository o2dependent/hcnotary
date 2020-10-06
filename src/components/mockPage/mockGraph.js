import React from 'react'
import { GraphBar, Box } from './mockPage'

export default function MockGraph({ num, delay }) {
	return (
		<>
			<Box
				key={`Box${num + delay}`}
				style={{
					display: 'grid',
					alignItems: 'flex-end',
					gridTemplateColumns: `repeat(${num || 1}, 1fr)`,
					padding: '1vmin',
				}}
				dark
				initial={{ x: `200%`, rotate: 75 }}
				animate={{ x: 0, rotate: 0 }}
				transition={{
					stiffness: 50,
					delay: 0.1,
					type: 'spring',
				}}
			>
				{Array(num)
					.fill()
					.map((x, i) => (
						<GraphBar
							key={`GraphBar${i}`}
							initial={{ height: 0 }}
							animate={{ height: `${(i / num) * 100 + 5}%` }}
							transition={{
								stiffness: 50,
								delay: 0.5,
								type: 'spring',
							}}
						/>
					))}
			</Box>
		</>
	)
}
