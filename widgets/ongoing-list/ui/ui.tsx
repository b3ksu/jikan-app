"use client";

import { LargeCard } from "@/entities";
import { useGetSeasonsNow } from "../model/model";

export const OngoingList = () => {
	const { data, isLoading, isError } = useGetSeasonsNow();

	return (
		<div className="col-span-9">
			<h2 className="mb-2 text-xl font-bold">Ongoing</h2>
			<div className="grid grid-cols-1 gap-x-3 gap-y-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
				{!isLoading ? (
					data?.data.map((el) => {
						return <LargeCard key={el.mal_id} isLoading={isLoading} {...el} />;
					})
				) : (
					<>Loading</>
				)}
			</div>
		</div>
	);
};
