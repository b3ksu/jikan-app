import { useQuery } from "@tanstack/react-query";
import { MostFavService } from "../api/most-fav.service";
import { MostFavConfig } from "../config";

export const useGetMostFav = () => {
	return useQuery({
		queryKey: ["mostFav"],
		queryFn: () =>
			MostFavService.getMostFav({ limit: MostFavConfig.LIMIT, filter: MostFavConfig.FILTER }),
	});
};
