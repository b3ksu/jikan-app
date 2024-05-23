import { ApiClient } from "@/shared/api";
import { AnimeList } from "@/shared/types";
import { IRecsParams } from "@/widgets/recs-carousel/model/recs.interface";
import { ICurrentSeasonControlsNav } from "../model/current-season.interface";

export type ISeasonsNowParams = Omit<IRecsParams, "type" | "rating"> & {
	unapproved?: "false" | "true";
};

export const CurrentSeasonService = {
	async getSeasonNow(params: ISeasonsNowParams, currentTab: ICurrentSeasonControlsNav) {
		try {
			const searchParams = new URLSearchParams({
				...params,
				page: currentTab.currentPage.toString(),
			});

			const { data } = await ApiClient.get<AnimeList>(currentTab.url, {
				params: searchParams,
			});
			return data;
		} catch (err) {
			throw new Error("что то неладно");
		}
	},
};
