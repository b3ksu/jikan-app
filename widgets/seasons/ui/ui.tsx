"use client";

import { cn } from "@/shared/lib/cn";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/shared/ui/carousel";
import Image from "next/image";
import { ISeasonsPaths, SeasonsData, SeasonsRoot } from "../model/seasons.interface";
import { useGetSeasons } from "../model/use-get-seasons";

export const Seasons = () => {
	const { seasons, seasonsLoading, animeList, handleClick, animeListLoading } = useGetSeasons();

	return (
		<div
			className={cn("col-span-9 rounded bg-gray-800 p-2", {
				"opacity-30": animeListLoading,
			})}
		>
			<div className="relative overflow-hidden rounded bg-cover bg-no-repeat p-2 backdrop-blur">
				<Image
					src="/seasons.jpg"
					alt="seasons"
					fill
					className="object-cover object-top opacity-10"
				/>

				<h2 className="title mb-4">Top anime by seasons</h2>
				<Carousel opts={{ align: "start", dragFree: true, watchDrag: true }}>
					<CarouselContent>
						{seasons?.data?.map((el) => (
							<CarouselItem className="basis-1/6" key={el.year}>
								<SeasonsBodyItem {...el} handle={handleClick} />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
			<hr />
			<hr />
			<hr />
			<hr />
			<div>Current Season list{JSON.stringify(animeList)}</div>
		</div>
	);
};

type Props = {
	handle: (path: ISeasonsPaths) => void;
} & SeasonsData;

export const SeasonsBodyItem = (p: Props) => {
	return (
		<div className="text-left text-3xl font-black text-gray-400 transition-all">
			<div>{p.year}</div>
			<div className="text-left text-xl">
				{p.seasons.map((el) => (
					<div
						onClick={() => p.handle({ season: el, year: String(p.year) })}
						className="cursor-pointer hover:text-gray-100"
						key={el}
					>
						{el}
					</div>
				))}
			</div>
		</div>
	);
};
