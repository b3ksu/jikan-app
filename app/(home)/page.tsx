import { OngoingList } from "@/widgets";

export default function Home() {
	return (
		<main className="container min-h-[1500px] text-ellipsis">
			<div className="grid grid-cols-12 gap-3">
				<OngoingList />
				<div className="col-span-3 rounded bg-slate-600">Aside</div>
			</div>
		</main>
	);
}
