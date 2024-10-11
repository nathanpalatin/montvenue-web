'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode, useState } from 'react'

export function Providers({ children }: { children: ReactNode }) {
	const [position, setPosition] = useState({ x: 0, y: 0 })

	const handleMouseMove = (event: { clientX: number; clientY: number }) => {
		setPosition({
			x: event.clientX - 10,
			y: event.clientY - 10
		})
	}
	return (
		<ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
			<div onMouseMove={handleMouseMove}>
				<div
					className="w-5 h-5 z-50 bg-orange-400 rounded-full transition-all duration-75"
					style={{
						position: 'fixed',
						top: `${position.y}px`,
						left: `${position.x}px`,
						pointerEvents: 'none'
					}}
				/>
				{children}
			</div>
		</ThemeProvider>
	)
}
