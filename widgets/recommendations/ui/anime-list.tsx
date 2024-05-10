import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchRecommendations } from "../api";
import { Root } from "../model/types";

export const AnimeList = async () => {
	const data = await fetchRecommendations();

	return (
		<div>
			<div className="text-red-400">Anime List</div>
			<div>
				{data?.data.map((el) => (
					<div key={el.mal_id}>{el.title}</div>
					// <div key={el.content}>
					// 	{el.entry.map((el) => (
					// 		<div key={el.mal_id}>
					// 			<div className="text-blue-600">{el.title}</div>
					// 			<Image
					// 				src={el.images.jpg.image_url}
					// 				alt="sdfsaf"
					// 				width={200}
					// 				height={200}
					// 			/>
					// 		</div>
					// 	))}
					// </div>
				))}
			</div>
		</div>
	);
};
