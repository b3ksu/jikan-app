"use client";

import { getRecs } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";

export const useGetRecsList = () => {
	return useQuery({
		queryKey: ["recsList"],
		queryFn: () => getRecs({ filter: "airing", limit: "9" }),
	});
};
