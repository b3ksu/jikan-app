import { ApiClient } from "@/shared/api";
import { AnimeList } from "@/shared/types";
import { SLUG } from "@/widgets/recs-carousel/config";
import { IRecsParams } from "@/widgets/recs-carousel/model/recs.interface";

export const MostFavService = {
	async getMostFav(props: IRecsParams) {
		try {
			const params = new URLSearchParams({ ...props });
			const { data } = await ApiClient.get<AnimeList>(SLUG, { params });
			return data;
		} catch (e) {
			throw new Error("что то неладно");
		}
	},
};
