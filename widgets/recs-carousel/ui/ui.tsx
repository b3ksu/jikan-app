"use client";

import { cn } from "@/shared/lib/utils";
import { Carousel, CarouselApi, CarouselContent } from "@/shared/ui/carousel";
import { useDotButton } from "@/widgets/recs-carousel/ui/carousel-dot/model/dot-button";
import { useState } from "react";
import { useGetRecsList } from "../model/get-recs-list";
import { DotButton } from "./carousel-dot/ui/ui";
import { RecsCarouselItem } from "./recs-carousel-item/ui";

export const RecsCarousel = () => {
	const { data, isLoading } = useGetRecsList();
	const [api, setApi] = useState<CarouselApi>();
	const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);

	if (isLoading) return <div>loading</div>;

	return (
		<Carousel setApi={setApi} opts={{ loop: true }} className="relative mb-6">
			<CarouselContent className="h-full">
				{data?.data.map((el) => (
					<RecsCarouselItem
						key={el.mal_id}
						{...el}
						selectedIndex={selectedIndex}
						scrollSnaps={scrollSnaps}
						onDotButtonClick={onDotButtonClick}
					/>
				))}
			</CarouselContent>
			<div className="absolute bottom-4 left-4 flex gap-2">
				{scrollSnaps.map((_, index) => (
					<DotButton
						key={index}
						onClick={() => onDotButtonClick(index)}
						className={cn("flex h-3 w-3 rounded-full bg-slate-600 transition-all", {
							"bg-purple-600": index === selectedIndex,
						})}
					/>
				))}
			</div>
		</Carousel>
	);
};
