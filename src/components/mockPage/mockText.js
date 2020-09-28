import React from 'react'
import styled from 'styled-components'
import { TitleBar, TextBar } from './mockPage'

export default function MockText({ num, delay, dark }) {
	return (
		<div
			style={{
				display: 'grid',
				alignItems: 'flex-end',
				gridTemplateRows: `repeat(${num || 1}, 1fr)`,
				padding: '1vmin',
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
							transition={{ duration: 1 + (delay || 0.15) * i, delay: 0.5 }}
						/>
					)
				)}
		</div>
	)
}
