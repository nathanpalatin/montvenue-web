import { Testimonials } from './Testimonials'

export function Customers() {
	return (
		<div className="h-screen w-screen px-40 bg-gray-200">
			<div className="flex w-full flex-col mt-20 justify-end">
				<h1 className="text-zinc-500 text-right">Customer reviews are a valuable source</h1>
				<h1 className="text-zinc-500 text-right">of information for both businesses and consumers.</h1>
			</div>
			<div className="flex mt-20 items-center gap-6 flex-col">
				<h1 className="text-7xl text-zinc-800 text-center font-thin">
					<span className="font-semibold">Customer</span> Voices: <br />
					<span className="font-semibold">Hear What</span> They Say!
				</h1>
			</div>
			<Testimonials />
		</div>
	)
}
