"use client";

import { Card } from "@/entities/card";
import { CurrentSeasonControls } from "@/features";
import { observer } from "mobx-react-lite";
import { CurrentSeasonConfig } from "../config";
import currentSeasonStore from "../config/current-season-store";
import { useGetSeasonsNow } from "../model";

export const CurrentSeasonList = observer(() => {
	const { currentList, setCurrentList, setNextPage, setPrevPage } = currentSeasonStore;
	const { data, isLoading, isError, isFetching } = useGetSeasonsNow({ ...currentList });

	return (
		<div className="col-span-12 2xl:col-span-9">
			<div className="flex justify-between">
				<h2 className="title">{CurrentSeasonConfig.TITLE}</h2>
				<CurrentSeasonControls
					curr={currentList}
					handleChange={setCurrentList}
					handleNext={setNextPage}
					handlePrev={setPrevPage}
					pagination={data?.pagination}
					isLoading={isFetching}
				/>
			</div>

			<div className="grid grid-cols-1 gap-x-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-6">
				{!isLoading ? (
					data?.data?.map((el) => {
						const id = crypto.randomUUID();
						return (
							<Card key={id} isLoading={isLoading} cardType="large-card" {...el} />
						);
					})
				) : (
					<>Loading</>
				)}
			</div>
		</div>
	);
});
