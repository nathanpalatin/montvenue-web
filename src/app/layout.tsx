import { ReactNode } from 'react'
import type { Metadata } from 'next'

import './globals.css'
import { Outfit } from 'next/font/google'

const fontFamily = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Montvenue',
	description: 'Finanças para a vida.'
}
export default function RootLayout({
	children
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${fontFamily.className} antialiased`}>{children}</body>
		</html>
	)
}
