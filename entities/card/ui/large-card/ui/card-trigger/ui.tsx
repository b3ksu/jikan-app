import { PlayIcon } from "@/shared/assets/play-icon";
import { AnimeListEntity } from "@/shared/types";
import { Badge } from "@/shared/ui/badge";
import { TooltipTrigger } from "@/shared/ui/tooltip";
import { Star, Tv } from "lucide-react";
import Image from "next/image";

interface Props extends AnimeListEntity {}

export const CardTrigger = (props: Props) => {
	return (
		<TooltipTrigger asChild>
			<div className="mb-1 flex h-[85%] w-full flex-col overflow-hidden rounded md:h-[80%]">
				<div className="group relative grid h-full w-full items-center justify-center bg-gray-800">
					<Image
						src={props.images.jpg.image_url}
						alt={props.title}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className="object-cover transition-all group-hover:opacity-30"
						loading="lazy"
					/>
					<PlayIcon
						className="z-50 col-span-full row-span-full opacity-0 transition-all group-hover:opacity-100"
						// size={44}
					/>
				</div>
				<div className="flex items-center justify-between bg-gray-800 p-0.5">
					<div className="flex gap-0.5">
						{props.episodes ? (
							<Badge variant="default" className="rounded-sm bg-purple-500">
								<Tv size={16} className="mr-1" /> {props.episodes}
							</Badge>
						) : null}
						{props.score ? (
							<Badge variant="default" className="rounded-sm bg-yellow-600">
								<Star size={16} className="mr-1" />
								{props.score}
							</Badge>
						) : null}
					</div>
					<Badge variant={"outline"}>{props.type ?? "Unknown"}</Badge>
				</div>
			</div>
		</TooltipTrigger>
	);
};
