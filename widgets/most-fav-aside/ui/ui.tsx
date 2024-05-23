"use client";

import { useGetMostFav } from "../model/use-get-most-fav";

export const MostFavAside = () => {
	const { data, isLoading } = useGetMostFav();

	return (
		<div className="col-span-3 rounded bg-slate-600">
			<div className="flex flex-col p-2">
				{isLoading ? (
					<div>Loading</div>
				) : (
					data?.data.map((el) => <div key={el.mal_id}>{el.title}</div>)
				)}
			</div>
		</div>
	);
};
