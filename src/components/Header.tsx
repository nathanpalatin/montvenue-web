import { MenuIcon } from 'lucide-react'

export function Header() {
	return (
		<>
			<div className="p-4 fixed w-full bg-zinc-900/10 z-50 backdrop-blur-sm border-b-[0.5px] border-zinc-800">
				<div className="flex justify-between items-center">
					<h1 className="text-white text-xl">montvenue</h1>
					<MenuIcon className="text-zinc-300 size-7" />
				</div>
			</div>
		</>
	)
}
