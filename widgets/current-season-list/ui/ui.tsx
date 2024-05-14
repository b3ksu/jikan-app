"use client";

import { LargeCard } from "@/entities";
import { useGetSeasonsNow } from "../model/get-season-now";
import { useSetCurrentNav } from "../model/set-current-nav";
import { SeasonLinks } from "./current-season-nav/ui";

export type CurrentSeasonNav = {
	title: string;
	url: string;
	id: number;
	currentPage: number;
};

export const CurrentSeasonList = () => {
	const { curr, handleNext, handlePrev, handleChange } = useSetCurrentNav();
	const { data, isLoading, isError, isFetching } = useGetSeasonsNow({ ...curr });

	return (
		<div className="col-span-12 2xl:col-span-9">
			<div className="flex justify-between">
				<h2 className="mb-2 text-xl font-bold">Recently Updated</h2>
				{!isFetching && (
					<SeasonLinks
						curr={curr}
						handleChange={handleChange}
						handleNext={handleNext}
						handlePrev={handlePrev}
						pagination={data?.pagination}
					/>
				)}
			</div>
			<div className="grid grid-cols-1 gap-x-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-6">
				{!isLoading ? (
					data?.data.map((el) => {
						const id = crypto.randomUUID();
						return <LargeCard key={id} isLoading={isLoading} {...el} />;
					})
				) : (
					<>Loading</>
				)}
			</div>
		</div>
	);
};
