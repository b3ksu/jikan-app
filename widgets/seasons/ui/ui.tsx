"use client";

import { useGetSeasons } from "../model/use-get-seasons";

export const Seasons = () => {
	const { animeList, seasons } = useGetSeasons();

	return (
		<>
			<div>All Seasons {JSON.stringify(seasons)}</div>
			<hr />
			<hr />
			<hr />
			<hr />
			<div>Current Season list{JSON.stringify(animeList)}</div>
		</>
	);
};
