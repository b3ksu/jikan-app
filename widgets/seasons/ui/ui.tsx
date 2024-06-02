"use client";

import { Card } from "@/entities/card";
import { cn } from "@/shared/lib/cn";
import { AnimeList } from "@/shared/types";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/shared/ui/carousel";
import Image from "next/image";
import { useGetSeasons } from "../model/use-get-seasons";
import { SeasonsBodyItem } from "./seasons-body-item/ui";

export const Seasons = () => {
	const { seasons, seasonsLoading, animeList, handleClick, animeListLoading } = useGetSeasons();

	return (
		<div
			className={cn("col-span-9 mb-4 rounded bg-gray-800 p-2", {
				"opacity-30": animeListLoading,
			})}
		>
			<div className="relative mb-4 overflow-hidden rounded bg-cover bg-no-repeat p-2 backdrop-blur">
				<Image
					src="/seasons.jpg"
					alt="seasons"
					fill
					className="object-cover object-top opacity-10"
				/>

				<h2 className="title mb-4">Top anime by seasons</h2>
				<Carousel opts={{ align: "start", dragFree: true, watchDrag: true }}>
					<CarouselContent>
						{seasons?.data?.map((season) => (
							<CarouselItem className="basis-1/6" key={season.year}>
								<SeasonsBodyItem {...season} handle={handleClick} />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>

			<SeasonsHeadItem {...animeList} isLoading={animeListLoading} />
		</div>
	);
};

type Props = AnimeList & {
	isLoading: boolean;
};

export const SeasonsHeadItem = (p: Props) => {
	return (
		<div className="grid grid-cols-1 px-12">
			{p?.data?.map((elem) => (
				<Card
					key={elem.mal_id}
					{...elem}
					cardType="small-card"
					isLoading={p.isLoading}
					isFullCardInfo
				/>
			))}
		</div>
	);
};
