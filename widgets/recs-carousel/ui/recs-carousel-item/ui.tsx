import { PlayIcon } from "@/shared/assets/play-icon";
import { AnimeListEntity } from "@/shared/types";
import { Button } from "@/shared/ui/button";
import { CarouselItem } from "@/shared/ui/carousel";
import Image from "next/image";

interface Props extends AnimeListEntity {
	selectedIndex: number;
	scrollSnaps: number[];
	onDotButtonClick: (index: number) => void;
}

export const RecsCarouselItem = ({ ...el }: Props) => {
	return (
		<CarouselItem key={el.mal_id} className="h-[500px] cursor-pointer">
			<div className="flex h-full justify-between">
				<div className="relative flex h-full w-2/5 flex-col justify-center gap-3">
					<h3 className="text-3xl font-extrabold">{el.title}</h3>
					<p className="line-clamp-3 text-base text-gray-500">{el.synopsis}</p>
					<Button
						className="h-10 w-max text-lg font-extrabold uppercase"
						variant={"purple"}
					>
						<PlayIcon size={20} className="mr-1" /> watch now
					</Button>
				</div>
				<div className="relative h-full w-3/5 overflow-hidden rounded-3xl">
					<Image
						src={el.trailer.images.maximum_image_url || el.images.jpg.large_image_url}
						alt="recs"
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className="object-cover"
					/>
				</div>
			</div>
		</CarouselItem>
	);
};
