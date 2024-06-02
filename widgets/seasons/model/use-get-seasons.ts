"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { SeasonsService } from "../api/seasons.service";
import { SeasonsConfig } from "../config";
import { ISeasonsPaths, SeasonsData } from "./seasons.interface";

export const useGetSeasons = () => {
	const { data: seasons, isFetching: seasonsLoading } = useQuery({
		queryKey: ["seasons"],
		queryFn: SeasonsService.getALlSeasons,
	});
	const [curr, setCurr] = useState<ISeasonsPaths | null>(null);

	useEffect(() => {
		if (seasons) {
			setCurr({
				season: seasons.data.at(0).seasons.at(0),
				year: seasons.data.at(0).year.toString(),
			});
		}
	}, [seasons]);

	const isLoaded = seasons?.data;

	const { data: animeList, isPlaceholderData: animeListLoading } = useQuery({
		queryKey: ["currentSeasonList", curr],
		queryFn: () =>
			SeasonsService.getCurrentSeasonList(
				{ unapproved: "false", limit: SeasonsConfig.LIMIT, sfw: "true" },
				curr,
			),
		enabled: !!isLoaded,
		placeholderData: (prev) => prev,
	});

	const handleClick = (path: ISeasonsPaths) => {
		setCurr(path);
	};

	return { seasons, animeList, animeListLoading, seasonsLoading, handleClick };
};
