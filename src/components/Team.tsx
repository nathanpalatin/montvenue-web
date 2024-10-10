import { ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'

export function Team() {
	return (
		<div className="h-screen w-screen px-40 bg-zinc-50">
			<div className="flex items-center mt-32 gap-20  justify-between">
				<div className="flex flex-col gap-7 w-1/2">
					<h1 className="text-zinc-800 text-7xl font-thin">
						<span className="font-semibold">Meet Our Team</span>
					</h1>
					<p className="font-thin">
						We are talented individuals who are passionate about bringing ideas to life. With a diverse range
						of backgrounds and skill sets, we collaborate to produce effective solutions for our clients.
					</p>
					<p className="font-thin">
						Together, our creative team is committed to delivering impactful work that exceeds expectations.
					</p>
					<button className="p-4 w-52 flex justify-evenly items-center gap-4 rounded-full text-black bg-orange-500 hover:bg-orange-600">
						READ MORE{' '}
						<div className="bg-zinc-800 p-2 rounded-full">
							<ChevronRightIcon className="text-orange-500" />
						</div>
					</button>
					<h1 className="font-thin text-2xl">
						We <span className="font-semibold">delivering</span> <br />
						exceptional <span className="font-semibold">results.</span>
					</h1>
				</div>
				<div className="mt-10 w-1/2">
					<div className="flex gap-6 items-center">
						<div className="group w-[240px] overflow-hidden h-[350px] bg-zinc-950/90 backdrop-blur-lg">
							<Image
								src={'/nathan.png'}
								alt=""
								className="w-[400px] group-hover:w-[300px] group-hover:h-[400px]  hover:opacity-10 transition-all duration-700 h-[450px] object-cover"
								quality={100}
								width={300}
								height={500}
							/>
						</div>
						<div className="group mt-40 w-[240px] overflow-hidden h-[350px] bg-zinc-900/90 backdrop-blur-lg">
							<Image
								src={'/doug.png'}
								alt=""
								className="w-[400px] group-hover:w-[300px] group-hover:h-[400px]  hover:opacity-10 transition-all duration-700 h-[450px] object-cover"
								quality={100}
								width={500}
								height={500}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
