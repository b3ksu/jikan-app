"use client";

import { useQuery } from "@tanstack/react-query";
import { CurrentSeasonService } from "../api/current-season.service";
import { CurrentSeasonConfig } from "../config";
import { ICurrentSeasonControlsNav } from "./current-season.interface";

export const useGetSeasonsNow = (currentTab: ICurrentSeasonControlsNav) => {
	return useQuery({
		queryKey: ["seasonsNow", `${currentTab.title}${currentTab.currentPage}`],
		queryFn: () =>
			CurrentSeasonService.getSeasonNow(
				{ sfw: "true", limit: CurrentSeasonConfig.LIMIT },
				currentTab,
			),
		staleTime: CurrentSeasonConfig.STALE_TIME,
	});
};
