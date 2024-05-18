"use client";

import { AnimeList } from "@/shared/types";
import { CurrentSeasonNav } from "@/shared/types/anime-list-nav";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetSeasonsNow = (info: CurrentSeasonNav) => {
	return useQuery({
		queryKey: ["seasonsNow", `${info.title}${info.currentPage}`],
		queryFn: () => getSeasonsNow(info),
	});
};

const getSeasonsNow = async (info: CurrentSeasonNav) => {
	const { data } = await axios.get<AnimeList>(
		`${process.env.NEXT_PUBLIC_BASE_API}${info.url}&page=${info.currentPage}&sfw=true`,
	);
	return data;
};
