import { ChevronRightIcon } from 'lucide-react'

export function Business() {
	return (
		<div className="h-screen w-screen px-40 bg-zinc-950">
			<div className="flex w-full flex-col mt-20 justify-end">
				<h1 className="text-zinc-500 text-right">Professionals focused on helping your brand</h1>
				<h1 className="text-zinc-500 text-right"> grow and move forward.</h1>
			</div>
			<div className="flex mt-20 items-center gap-6 flex-col">
				<h1 className="text-8xl text-white text-center font-thin">
					<span className="font-semibold">Unique</span> Ideias <br />
					<span className="font-semibold">For Your</span> Business.
				</h1>
				<button className="p-4 h-16 flex justify-center items-center gap-4 rounded-full text-black bg-orange-500 hover:bg-orange-600">
					WHAT WE DO{' '}
					<div className="bg-zinc-800 p-2 rounded-full">
						<ChevronRightIcon className="text-orange-500" />
					</div>
				</button>
			</div>
			<div className="flex mt-10 items-start">
				<div className="group w-1/4 hover:cursor-pointer min-h-40 border">
					<div className="w-0 h-2 bg-orange-500 group-hover:w-full  transition-all duration-500" />
					<div className="p-4 space-y-6">
						<h1 className="text-white text-xl">
							Branding and <br /> Identity Design
						</h1>
						<p className="text-zinc-500 transition-all opacity-0 group-hover:opacity-100 duration-700 mb-0 group-hover:mb-4">
							Our creative agency is a team of professionals focused on helping your brand grow.
						</p>
						<button className="p-2 group-hover:opacity-100 opacity-1 group-hover:scale-100 scale-0 transition-all  flex justify-center items-center gap-4 rounded-full text-black bg-orange-500 hover:bg-orange-600">
							<ChevronRightIcon className="text-white" />
						</button>
					</div>
				</div>
				<div className="group w-1/4 min-h-40 border">
					<div className="w-0 h-2 bg-orange-500 group-hover:w-full transition-all duration-500 " />
					<div className="p-4 space-y-6 ">
						<h1 className="text-white text-xl">
							Website Design <br /> and Development
						</h1>
						<p className="text-zinc-500 transition-all opacity-0 group-hover:opacity-100 duration-700 mb-0 group-hover:mb-4">
							Our creative agency is a team of professionals focused on helping your brand grow.
						</p>
						<button className="p-2 group-hover:opacity-100 opacity-1 group-hover:scale-100 scale-0 transition-all  flex justify-center items-center gap-4 rounded-full text-black bg-orange-500 hover:bg-orange-600">
							<ChevronRightIcon className="text-white" />
						</button>
					</div>
				</div>
				<div className="group w-1/4 min-h-40 border">
					<div className="w-0 h-2 bg-orange-500 group-hover:w-full transition-all duration-500" />
					<div className="p-4 space-y-6 ">
						<h1 className="text-white text-xl">Advertising and Marketing Campaigns</h1>
						<p className="text-zinc-500 transition-all opacity-0 group-hover:opacity-100 duration-700 mb-0 group-hover:mb-4">
							Our creative agency is a team of professionals focused on helping your brand grow.
						</p>
						<button className="p-2 group-hover:opacity-100 opacity-1 group-hover:scale-100 scale-0 transition-all  flex justify-center items-center gap-4 rounded-full text-black bg-orange-500 hover:bg-orange-600">
							<ChevronRightIcon className="text-white" />
						</button>
					</div>
				</div>
				<div className="group w-1/4 min-h-40 border">
					<div className="w-0 h-2 bg-orange-500 group-hover:w-full transition-all duration-500" />
					<div className="p-4 space-y-6 ">
						<h1 className="text-white text-xl">Creative Consulting and Development</h1>
						<p className="text-zinc-500 transition-all opacity-0 group-hover:opacity-100 duration-700 mb-0 group-hover:mb-4">
							Our creative agency is a team of professionals focused on helping your brand grow.
						</p>
						<button className="p-2 group-hover:opacity-100 opacity-1 group-hover:scale-100 scale-0 transition-all  flex justify-center items-center gap-4 rounded-full text-black bg-orange-500 hover:bg-orange-600">
							<ChevronRightIcon className="text-white" />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
