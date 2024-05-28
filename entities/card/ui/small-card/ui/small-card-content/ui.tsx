import { AnimeListEntity } from "@/shared/types";
import { Badge } from "@/shared/ui/badge";
import { Star, Tv } from "lucide-react";
import Image from "next/image";

type Props = AnimeListEntity;

export const SmallCardContent = (props: Props) => {
	return (
		<div className="flex items-center gap-2">
			<div className="relative h-14 w-12">
				<Image
					src={props.images.jpg.image_url}
					alt={props.title}
					fill
					className="object-cover"
				/>
			</div>
			<div>
				<h5 className="text-sm leading-5">{props.title}</h5>
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
					<Badge variant={"outline"} className="px-1 text-gray-400">
						{props.type ?? "Unknown"}
					</Badge>
				</div>
			</div>
		</div>
	);
};
