export function Video() {
	return (
		<div className="bg-zinc-950">
			<video
				src="/video.mp4"
				autoPlay
				muted
				loop
				className="absolute top-0 left-0 opacity-20 h-full w-screen object-cover"
			/>
		</div>
	)
}
