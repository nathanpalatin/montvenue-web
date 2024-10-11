export function Video() {
	return (
		<div className="bg-zinc-950">
			<video
				src={
					'https://82oeukjshsyauuib.public.blob.vercel-storage.com/uploads/video-3ozg1LBmb2HreQoxknkN4sEJCNf6Yp.mp4'
				}
				autoPlay
				muted
				loop
				className="absolute top-0 left-0 opacity-20 h-full w-screen object-cover"
			/>
		</div>
	)
}
