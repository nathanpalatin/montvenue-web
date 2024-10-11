'use client'

import { useState } from 'react'
import Image from 'next/image'
import { SvgComment } from './SvgComment'
import { motion } from 'framer-motion'

import nathan from '@/assets/nathan.png'
import doug from '@/assets/doug.png'

export function Testimonials() {
	const [personsSelected, setPersonsSelected] = useState<number | null>(0)

	const persons = [
		{
			id: 1,
			name: 'Nathan Palatin',
			title: 'CTO & Omi',
			comment: 'o Marcelo e um rrombado!',
			src: nathan
		},
		{ id: 2, name: 'Doug Alsant', title: 'CEO & Gay', comment: 'o Marcio e um rrombado!', src: doug }
	]

	const containerVariants = {
		initial: { opacity: 0, y: 50 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: -50 }
	}

	return (
		<>
			<div className="flex gap-10 my-10 justify-center">
				{persons.map((person, index) => (
					<button
						key={person.id}
						onClick={() => setPersonsSelected(index)}
						className={`group w-[100px] ${
							index % 2 && 'mt-6'
						} transition-all h-[100px] overflow-hidden rounded-full ${
							personsSelected === index ? 'border-orange-500 border-2' : 'bg-gray-900/90'
						}`}
					>
						<Image
							alt={person.name}
							className="object-cover w-full h-full"
							src={person.src}
							width={60}
							height={60}
						/>
					</button>
				))}
			</div>

			<SvgComment />

			{personsSelected !== null && (
				<motion.div
					className="text-center px-40"
					key={persons[personsSelected].id}
					initial="initial"
					animate="animate"
					exit="exit"
					variants={containerVariants}
					transition={{ duration: 0.5 }}
				>
					<h1 className="pt-6 text-lg">{persons[personsSelected].name}</h1>
					<h1 className="text-base font-light">{persons[personsSelected].title}</h1>
					<p className="text-black font-thin leading-8">{persons[personsSelected].comment}</p>
				</motion.div>
			)}
		</>
	)
}
