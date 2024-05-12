"use client";

import { SeasonsNowEntity } from "@/widgets/ongoing-list/model/types";
import Image from "next/image";

interface Props extends SeasonsNowEntity {
	isLoading: boolean;
}

export const LargeCard = (props: Props) => {
	return (
		<div className="h-72 w-full overflow-hidden rounded transition-all hover:cursor-pointer">
			<div className="relative mb-1 h-[80%] w-full overflow-hidden bg-slate-800 p-1">
				<Image
					src={props.images.jpg.image_url}
					alt={props.title}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="object-cover"
					loading="lazy"
				/>
			</div>
			<div className="line-clamp-2 text-sm leading-4 hover:text-purple-500">
				{props.title}
			</div>
		</div>
	);
};
