"use client";

import { Card } from "@/entities/card";
import { TopAnimeControlsNav } from "@/features";
import { useState } from "react";
import { TopAnimeConfig, TopAnimeControls } from "../config";
import { useGetTopAnime } from "../model/use-get-top-anime";

export const TopAnimeAside = () => {
	const [tab, setTab] = useState<TopAnimeControls | undefined>(TopAnimeConfig.CONTROLS[0]);
	const { data, isLoading, isError } = useGetTopAnime({ ...tab });

	const handleTabChange = (tab: TopAnimeControls) => {
		setTab(tab);
	};

	return (
		<div className="col-span-3 h-max rounded">
			<div className="mb-2 flex items-center justify-between">
				<h2 className="title m-0">{TopAnimeConfig.TITLE}</h2>

				<TopAnimeControlsNav
					tab={tab}
					isLoading={isLoading}
					handleTabChange={handleTabChange}
				/>
			</div>

			<div className="flex flex-col gap-2 p-2">
				{isLoading ? (
					<div>Loading</div>
				) : (
					data?.data?.map((el, i) => (
						<Card
							isLoading={isLoading}
							index={i + 1}
							cardType="small-card"
							key={el.mal_id}
							shouldCount
							{...el}
						></Card>
					))
				)}
			</div>
		</div>
	);
};
