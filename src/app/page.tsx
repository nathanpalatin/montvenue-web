import { Business } from '@/components/Business'
import { Content } from '@/components/Content'
import { Customers } from '@/components/Costumers'
import { Header } from '@/components/Header'
import { Services } from '@/components/Services'
import { Team } from '@/components/Team'
import { Video } from '@/components/Video'

export default function Home() {
	return (
		<div className="w-screen bg-zinc-950">
			<Header />
			<Video />
			<Content />
			<div className="max-w-[1300px] mx-auto justify-center items-center flex flex-col">
				<Services />
				<Business />
				<Team />
				<Customers />
			</div>
		</div>
	)
}
