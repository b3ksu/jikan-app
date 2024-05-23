"use client";

import { RecsService } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";
import { RecsConfig } from "../config";

export const useGetRecs = () => {
	return useQuery({
		queryKey: ["recsList"],
		queryFn: () => RecsService.getRecs({ filter: RecsConfig.FILTER, limit: RecsConfig.LIMIT }),
	});
};
