"use client";

import { LargeCard } from "@/entities";
import { CurrentSeasonNavLinks } from "@/features";
import { observer } from "mobx-react-lite";
import { CurrentSeasonModel } from "..";

export const CurrentSeasonList = observer(() => {
	const {
		store: { currentList, setCurrentList, setNextPage, setPrevPage },
		useGetSeasonsNow,
	} = CurrentSeasonModel;
	const { data, isLoading, isError, isFetching } = useGetSeasonsNow({ ...currentList });

	return (
		<div className="col-span-12 2xl:col-span-9">
			<div className="flex justify-between">
				<h2 className="mb-2 text-xl font-bold">Recently Updated</h2>

				<CurrentSeasonNavLinks
					curr={currentList}
					handleChange={setCurrentList}
					handleNext={setNextPage}
					handlePrev={setPrevPage}
					pagination={data?.pagination}
				/>
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
});
