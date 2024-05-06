import { AnimeList } from "@/widgets/recommendations/ui/anime-list";

export default function Home() {
	return (
		<main className="min-h-[1500px] text-ellipsis p-24 ">
			<AnimeList />
		</main>
	);
}
