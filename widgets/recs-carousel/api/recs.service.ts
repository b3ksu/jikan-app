import { AnimeList } from "@/shared/types";
import { ApiClient } from "../../../shared/api/api-client";
import { SLUG } from "../config";
import { IRecsParams } from "../model/recs.interface";

export const RecsService = {
	async getRecs(props: IRecsParams) {
		try {
			const params = new URLSearchParams({ ...props });
			const { data } = await ApiClient.get<AnimeList>(SLUG, { params });
			return data;
		} catch (err) {
			throw new Error("что то неладно");
		}
	},
};
