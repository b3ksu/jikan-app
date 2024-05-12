"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SeasonsNow } from "./types";

export const useGetSeasonsNow = () => {
	return useQuery({
		queryKey: ["seasonsNow"],
		queryFn: async () => {
			const { data } = await axios.get<SeasonsNow>(
				`${process.env.NEXT_PUBLIC_BASE_API}/seasons/now?page=1&limit=24`,
			);

			return data;
		},
	});
};
