import { AnimeList, CurrentSeasonNav } from "@/shared/types";
import { ApiClient } from "../api-client";
import { GetAnimeParams } from "../get-recs";

type GetSeasonsNowParams = Omit<GetAnimeParams, "type" | "rating"> & {
	unapproved?: "false" | "true";
};

export const getSeasonsNow = async (props: GetSeasonsNowParams, currentTab: CurrentSeasonNav) => {
	try {
		const params = new URLSearchParams({ ...props, page: currentTab.currentPage.toString() });
		const { data } = await ApiClient.get<AnimeList>(currentTab.url, { params });
		return data;
	} catch (err) {
		throw new Error("что то неладно");
	}
};
