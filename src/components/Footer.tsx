import Image from 'next/image'

import logoFooter from '@/assets/logo-white.png'
import instagramLogo from '@/assets/instagram.png'
import linkedinLogo from '@/assets/linkedin.png'
import facebookLogo from '@/assets/facebook.png'

import { ChevronRightCircle } from 'lucide-react'

export function Footer() {
	return (
		<div className="h-[700px] w-screen px-40 bg-gray-950">
			<div className="mt-32 grid grid-cols-3">
				<div>
					<Image alt="logo footer" width={180} className="object-contain " height={70} src={logoFooter} />
					<div className="mt-10">
						<p className="text-zinc-500">Subscribe our newsletter:</p>
						<div className=" mt-4 flex items-center gap-4">
							<input
								className="w-[240px] px-4 py-3 rounded-full text-zinc-200 bg-zinc-700 outline-none"
								type="text"
								placeholder="Enter your email"
							/>
							<button className="p-3 text-white rounded-full bg-zinc-800">
								<ChevronRightCircle />
							</button>
						</div>
						<div className="flex items-center my-10 gap-4">
							<a href="https://instagram.com/montvenue" target="_blank">
								<Image src={instagramLogo} width={20} height={20} alt="instagram montvenue" />
							</a>
							<a href="https://linkedin.com/in/montvenue" target="_blank">
								<Image src={linkedinLogo} width={25} height={26} alt="linkedin montvenue" />
							</a>
							<a href="https://facebook.com/montvenue" target="_blank">
								<Image src={facebookLogo} width={25} height={26} alt="facebook montvenue" />
							</a>
						</div>
						<p className=" text-sm text-zinc-500">© Copyright 2024 - montvenue. All Rights Reserved.</p>
					</div>
				</div>
				<div>
					<h1 className="text-2xl text-zinc-200 font-semibold">About Us</h1>
					<ul className="list-disc pl-6 text-white">
						<li>Company Overview</li>
						<li>Press Releases</li>
						<li>Press Contact</li>
					</ul>
				</div>
				<div>
					<h1 className="text-2xl text-zinc-200 font-semibold">montvenue</h1>
					<ul className="list-disc pl-6 text-white">
						<li>Our Mission</li>
						<li>Press</li>
						<li>Careers</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
