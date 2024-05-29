import { useQuery } from "@tanstack/react-query";
import { TopAnimeService } from "../api/top-anime.service";
import { TopAnimeConfig, TopAnimeControls } from "../config";

export const useGetTopAnime = (tab: TopAnimeControls) => {
	return useQuery({
		queryKey: ["mostFav", `${tab.id}${tab.params}${tab.title}`],
		queryFn: () =>
			TopAnimeService.getTopAnime({
				limit: TopAnimeConfig.LIMIT,
				filter: tab.params,
			}),
		staleTime: TopAnimeConfig.STALE_TIME,
	});
};
