"use client";

import { Card } from "@/entities/card";
import { useGetMostFav } from "../model/use-get-most-fav";

export const MostFavAside = () => {
	const { data, isLoading } = useGetMostFav();

	return (
		<div className="col-span-3 h-max rounded ">
			<h2 className="title">Top anime</h2>

			<div className="flex flex-col gap-2 p-2">
				{isLoading ? (
					<div>Loading</div>
				) : (
					data?.data.map((el, i) => (
						<Card
							isLoading={isLoading}
							index={i + 1}
							cardType="small-card"
							key={el.mal_id}
							{...el}
						></Card>
					))
				)}
			</div>
		</div>
	);
};
