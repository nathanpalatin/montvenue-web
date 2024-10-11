import { MenuIcon } from 'lucide-react'
import Image from 'next/image'

import logo from '@/assets/logo.png'

export function Header() {
	return (
		<div className="p-4 fixed w-full bg-zinc-900/10 z-50 backdrop-blur-sm border-b-[0.5px] border-zinc-800">
			<div className="flex justify-between items-center">
				<Image alt="logo montvenue" src={logo} priority width={60} height={40} />
				<MenuIcon className="text-zinc-300 size-7" />
			</div>
		</div>
	)
}
