"use client";

import { useQuery } from "@tanstack/react-query";
import { SeasonsService } from "../api/seasons.service";
import { SeasonsConfig } from "../config";

export const useGetSeasons = () => {
	const { data: seasons, isFetching: seasonsLoading } = useQuery({
		queryKey: ["seasons"],
		queryFn: SeasonsService.getALlSeasons,
	});

	const isLoaded = seasons?.data;
	const basePath = seasons
		? {
				season: seasons.data.at(-1).seasons.at(-1),
				year: seasons.data.at(-1).year.toString(),
			}
		: null;

	const { data: animeList, isFetching: animeListLoading } = useQuery({
		queryKey: ["currentSeasonList"],
		queryFn: () =>
			SeasonsService.getCurrentSeasonList(
				{ unapproved: "false", limit: SeasonsConfig.LIMIT, sfw: "true" },
				basePath,
			),
		enabled: !!isLoaded,
	});

	return { seasons, animeList, animeListLoading, seasonsLoading };
};
