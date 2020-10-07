import React from 'react'
import { TitleBar, TextBar } from './mockPage'

export default function MockText({ num, delay, dark }) {
	return (
		<div
			style={{
				display: 'grid',
				alignItems: 'flex-end',
				gridTemplateRows: `repeat(${num || 1}, 1fr)`,
				padding: '0.5rem',
			}}
		>
			<TitleBar
				initial={{ width: 0 }}
				animate={{ width: '100%' }}
				transition={{ duration: 1, delay: delay || 0.15 }}
				dark
			/>
			{Array(num - 1)
				.fill()
				.map((x, i) =>
					i !== num - 2 ? (
						<TextBar
							key={`TextBar${i + num + delay}`}
							dark={dark}
							initial={{ width: 0 }}
							animate={{ width: '100%' }}
							transition={{
								duration: 1,
								delay: (delay || 0.15) * i,
							}}
						/>
					) : (
						<TextBar
							key={`TextBar${i + num + delay}`}
							dark={dark}
							short
							initial={{ width: 0 }}
							animate={{ width: '75%' }}
							transition={{
								duration: 1,
								delay: (delay || 0.15) * i,
							}}
						/>
					)
				)}
		</div>
	)
}
