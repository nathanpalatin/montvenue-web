import { ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'

import article1 from '@/assets/article1.jpg'
import article2 from '@/assets/article2.jpg'
export function Blog() {
	return (
		<div className="h-screen w-screen px-40 bg-zinc-50">
			<div className="mt-20 flex justify-between items-center">
				<h1 className="text-4xl font-semibold">Popular Publications:</h1>
				<button className="p-4 flex justify-between items-center gap-4 rounded-full text-zinc-600">
					VIEW ALL
					<div className="bg-zinc-800 p-1 rounded-full">
						<ChevronRightIcon className="text-white" size={16} />
					</div>
				</button>
			</div>
			<div className="mt-10 grid grid-cols-2 gap-8">
				<div className="flex flex-col">
					<div className="w-full h-80 overflow-hidden">
						<Image
							alt="article 1"
							src={article1}
							width={600}
							className="object-cover scale-1 hover:scale-125 duration-700 transition-all "
							height={400}
						/>
					</div>
					<h1 className="py-8 text-sm font-normal text-orange-500">
						TECHNOLOGY <span className="text-black pl-4">MAY 14 2024</span>
					</h1>
					<p className="text-xl font-semibold text-gray-600">
						How to Become a Graphic Designer in 10 Simple Steps
					</p>
					<p className="pt-4 text-sm font-light text-black">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio,
						beatae, eos necessitatibus nisi ...
					</p>
					<button className="mt-10 flex  items-center gap-4 font-medium text-sm tracking-widest rounded-full text-zinc-800">
						READ MORE
						<div className="bg-zinc-200 p-1 rounded-full">
							<ChevronRightIcon className="text-zinc-600" size={16} />
						</div>
					</button>
				</div>
				<div className="flex flex-col ">
					<div className="w-full h-80 overflow-hidden">
						<Image
							alt=""
							src={article2}
							width={600}
							className="object-cover scale-1 hover:scale-125 duration-700 transition-all "
							height={400}
						/>
					</div>
					<h1 className="py-8 text-sm font-normal text-orange-500">
						TECHNOLOGY <span className="text-black pl-4">SEP 10 2024</span>
					</h1>
					<p className="text-xl font-semibold text-gray-600">
						16 Best Graphic Design Online and Offline Courses
					</p>
					<p className="pt-4 text-sm font-light text-black">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio,
						beatae, eos necessitatibus nisi ...
					</p>
					<button className="mt-10 flex  items-center gap-4 font-medium text-sm tracking-widest rounded-full text-zinc-800">
						READ MORE
						<div className="bg-zinc-200 p-1 rounded-full">
							<ChevronRightIcon className="text-zinc-600" size={16} />
						</div>
					</button>
				</div>
			</div>
		</div>
	)
}
