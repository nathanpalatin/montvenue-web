'use client'

import { motion } from 'framer-motion'
import { ChevronRightIcon } from 'lucide-react'

export function Content() {
	return (
		<motion.div
			className="w-full px-40 h-screen"
			initial={{ opacity: 0, y: 0 }}
			animate={{ opacity: 0, y: 200 }}
			transition={{ duration: 0.7 }}
			whileInView={{ opacity: 1, y: 100 }}
			viewport={{ amount: 0.4 }}
		>
			<div className="flex flex-col h-full justify-center items-start">
				<h1 className="text-8xl text-white font-thin">
					<span className="font-semibold">Designing</span> a
				</h1>
				<h1 className="text-white text-6xl font-thin">
					<span className="font-semibold">Better</span> World Today
				</h1>
				<p className="text-white pt-10 w-[600px]">
					Welcome to our world of endless imagination and boundless creativity. Together, let`s embark on a
					remarkable journey where dreams become tangible realities.
				</p>
				<div className=" mt-10 gap-10 flex items-center">
					<button className="p-4 flex justify-between items-center gap-4  rounded-full text-black bg-orange-500 hover:bg-orange-600">
						WHAT WE DO{' '}
						<div className="bg-zinc-800 p-2 rounded-full">
							<ChevronRightIcon className="text-orange-500" />
						</div>
					</button>{' '}
					<button className="p-4 flex justify-between items-center gap-4  rounded-full text-white ">
						VIEW WORKS
						<div className="bg-zinc-800 p-2 rounded-full">
							<ChevronRightIcon className="text-white" />
						</div>
					</button>
				</div>
			</div>
		</motion.div>
	)
}
