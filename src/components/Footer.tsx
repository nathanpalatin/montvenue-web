import Image from 'next/image'

import logoFooter from '@/assets/logo-white.png'
import instagramLogo from '@/assets/instagram.png'
import linkedinLogo from '@/assets/linkedin.png'
import facebookLogo from '@/assets/facebook.png'

import { ChevronRightCircle } from 'lucide-react'

export function Footer() {
	return (
		<div className="py-20 w-screen px-40 bg-gray-950">
			<div className="flex items-start gap-20">
				<div className="w-[430px]">
					<Image alt="logo footer" width={140} className="object-contain " height={70} src={logoFooter} />
					<div className="mt-10">
						<p className="text-zinc-500">Subscribe our newsletter:</p>
						<div className=" bg-zinc-900  px-6 py-2 w-[270px] rounded-full mt-4 flex items-center gap-4">
							<input
								className=" bg-transparent placeholder:text-zinc-700 placeholder:text-sm text-zinc-200 outline-none"
								type="text"
								placeholder="ENTER OUR EMAIL"
							/>
							<button className="p-3 text-white rounded-full bg-orange-500">
								<ChevronRightCircle />
							</button>
						</div>
						<div className="mt-32 flex items-center my-10 gap-4">
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
					<ul className="list-none pl-6 space-y-3 text-white">
						<li className="text-3xl font-semibold text-orange-500">Home</li>
						<li className="text-3xl font-semibold">Portfolio</li>
						<li className="text-3xl font-semibold">Services</li>
						<li className="text-3xl font-semibold">Contact</li>
						<li className="text-3xl font-semibold">Blog</li>
					</ul>
					<div className="pl-6 mt-10">
						<h1 className="text-white font-semibold text-lg">Brazil</h1>
						<p className="pt-4 text-zinc-600 font-medium text-lg">Icon Residence, Apto 1106</p>
						<p className=" text-zinc-600 font-medium text-lg">Balneario Camboriu, SC</p>
						<p className=" text-zinc-600 font-medium text-lg">+55 (47) 99999-9999</p>
					</div>
				</div>
				<div>
					<ul className="list-none pl-6 space-y-3 text-white">
						<li className="text-md text-zinc-600 font-semibold">Privacy Policy</li>
						<li className="text-md text-zinc-600 font-semibold">Terms and conditions</li>
						<li className="text-md text-zinc-600 font-semibold">Cookie Policy</li>
						<li className="text-md text-zinc-600 font-semibold">Careers</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
