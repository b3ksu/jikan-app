"use client";

import { getSeasonsNow } from "@/shared/api/get-seasons-now";
import { CurrentSeasonNav } from "@/shared/types/anime-list-nav";
import { useQuery } from "@tanstack/react-query";

export const useGetSeasonsNow = (currentTab: CurrentSeasonNav) => {
	return useQuery({
		queryKey: ["seasonsNow", `${currentTab.title}${currentTab.currentPage}`],
		queryFn: () => getSeasonsNow({ sfw: "true", limit: "12" }, currentTab),
	});
};
