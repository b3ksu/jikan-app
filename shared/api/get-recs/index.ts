import { AnimeList } from "@/shared/types";
import { ApiClient } from "../api-client";

const SLUG = "/top/anime";

export interface GetAnimeParams {
	filter?: string;
	limit?: string;
	rating?: "g" | "pg" | "pg13" | "r17" | "r" | "rx";
	sfw?: "true" | "false";
	page?: string;
	type?: "tv" | "movie" | "ova" | "special" | "ona" | "music" | "cm" | "pv" | "tv_special";
}

export const getRecs = async (props: GetAnimeParams) => {
	try {
		const params = new URLSearchParams({ ...props });
		const { data } = await ApiClient.get<AnimeList>(SLUG, { params });
		return data;
	} catch (err) {
		throw new Error("что то неладно");
	}
};
