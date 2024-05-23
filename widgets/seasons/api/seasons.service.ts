import { ApiClient, ISeasonsNowParams } from "@/shared/api";
import { generateQueryPath } from "@/shared/lib/generate-query-path";
import { AnimeList } from "@/shared/types";
import { SeasonsConfig } from "../config";
import { ISeasonsPaths, SeasonsRoot } from "../model/seasons.interface";

export const SeasonsService = {
	async getALlSeasons() {
		try {
			const { data } = await ApiClient.get<SeasonsRoot>(SeasonsConfig.BASE_PATH);
			return data;
		} catch (e) {
			throw new Error(e);
		}
	},

	async getCurrentSeasonList(params: ISeasonsNowParams, { season, year }: ISeasonsPaths) {
		try {
			const path = generateQueryPath({ year, season }, SeasonsConfig.BASE_PATH);
			const searchParams = new URLSearchParams({ ...params });

			const { data } = await ApiClient.get<AnimeList>(path, { params: searchParams });
			return data;
		} catch (e) {
			throw new Error(e);
		}
	},
};
