import { PlayIcon } from "@/shared/assets/play-icon";
import { AnimeListEntity } from "@/shared/types";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { TooltipContent } from "@/shared/ui/tooltip";

interface Props extends AnimeListEntity {}

export const CardTooltipContent = (props: Props) => {
	return (
		<TooltipContent
			className="flex min-h-40 w-60 flex-col gap-2 bg-gray-800 p-3"
			sideOffset={4}
			side="right"
			alignOffset={-100}
			align="end"
		>
			<h3 className="text-base leading-5 text-purple-400">{props.title}</h3>
			<Badge className="bg-slate-400">{props.rating}</Badge>
			<p className="line-clamp-3 text-sm leading-5">{props.synopsis}</p>
			<p className="">
				<span className="text-gray-400">Scores:</span> {props.score}{" "}
				{!!props.scored_by && (
					<span className="text-gray-400">/ {props.scored_by} Reviews</span>
				)}
			</p>
			<div>
				<Button variant="ghost" className="h-8 px-8">
					<PlayIcon fill="#000" size={16} className="mr-1" /> Watch
				</Button>
			</div>
		</TooltipContent>
	);
};
