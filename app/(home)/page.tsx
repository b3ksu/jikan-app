import { CurrentSeasonList, RecsCarousel } from "@/widgets";

export default function Home() {
	return (
		<main className="container min-h-[1500px] text-ellipsis">
			<RecsCarousel />
			<div className="grid grid-cols-12 gap-3">
				<CurrentSeasonList />
				<div className="col-span-3 rounded bg-slate-600">Aside</div>
			</div>
		</main>
	);
}
