import { ReactNode } from 'react'
import type { Metadata } from 'next'

import './globals.css'
import { Outfit } from 'next/font/google'
import { Providers } from './providers'

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
			<body className={`${fontFamily.className} antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
