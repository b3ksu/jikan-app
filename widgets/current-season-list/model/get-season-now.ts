"use client";

import { AnimeList } from "@/shared/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CurrentSeasonNav } from "../ui/ui";

export const useGetSeasonsNow = (info: CurrentSeasonNav) => {
	return useQuery({
		queryKey: ["seasonsNow", `${info.title}${info.currentPage}`],
		queryFn: async () => {
			const { data } = await axios.get<AnimeList>(
				`${process.env.NEXT_PUBLIC_BASE_API}${info.url}&page=${info.currentPage}&sfw=true`,
			);

			return data;
		},
	});
};
