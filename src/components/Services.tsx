import Image from 'next/image'

export function Services() {
	return (
		<div className="h-screen w-screen px-40 bg-zinc-50">
			<div className="flex items-center gap-20  justify-between">
				<div className="flex flex-col gap-10 w-1/2">
					<h1 className="text-zinc-800 text-7xl font-thin">
						<span className="font-semibold">
							Discover
							<br /> Our
						</span>{' '}
						Studio
					</h1>
					<p className="font-thin">
						At our design studio, we are a collective of talented individuals ignited by our unwavering
						passion for transforming ideas into reality. With a harmonious blend of diverse backgrounds and a
						vast array of skill sets, we join forces to create compelling solutions for our esteemed clients.
					</p>
					<p className="font-thin">
						Collaboration is at the heart of what we do. Our team thrives on the synergy that arises when
						unique perspectives converge, fostering an environment of boundless creativity. By harnessing our
						collective expertise, we produce extraordinary results that consistently surpass expectations.
					</p>
					<div className="flex items-center gap-6">
						<Image
							src={'https://miller.bslthemes.com/ashley-demo/img/faces/customers/2.jpg'}
							alt=""
							className="w-20 h-20 rounded-full object-cover"
							quality={100}
							width={100}
							height={100}
						/>
						<h1>Passionately Creating Design Wonders: Unleashing Boundless Creativity</h1>
					</div>
				</div>
				<div className="mt-10 w-1/2">
					<Image
						src={'https://miller.bslthemes.com/ashley-demo/img/photo/1.jpg'}
						alt=""
						className="w-full h-[800px] object-cover"
						quality={100}
						width={600}
						height={800}
					/>
				</div>
			</div>
		</div>
	)
}
