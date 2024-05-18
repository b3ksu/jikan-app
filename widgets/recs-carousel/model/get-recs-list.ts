"use client";

import { AnimeList } from "@/shared/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetRecsList = () => {
	return useQuery({
		queryKey: ["recsList"],
		queryFn: () => getRecs(),
	});
};

const getRecs = async () => {
	const { data } = await axios.get<AnimeList>(
		`${process.env.NEXT_PUBLIC_BASE_API}/top/anime?filter=airing&limit=9`,
	);
	return data;
};
