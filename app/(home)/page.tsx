import { AnimeList } from "@/widgets/recommendations/ui/anime-list";

export default function Home() {
	return (
		<main className="container min-h-[1500px] text-ellipsis">
			<AnimeList />
		</main>
	);
}
