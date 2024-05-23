"use client";

import { AnimeListEntity } from "@/shared/types";
import { Tooltip, TooltipProvider } from "@/shared/ui/tooltip";
import { CardTooltipContent } from "./card-tooltip-content/ui";
import { CardTrigger } from "./card-trigger/ui";

interface Props extends AnimeListEntity {
	isLoading: boolean;
}

export const LargeCard = (props: Props) => {
	return (
		<TooltipProvider delayDuration={100}>
			<div className="h-96 w-full overflow-hidden transition-all hover:cursor-pointer xl:h-80">
				<Tooltip>
					<CardTrigger {...props} />
					<CardTooltipContent {...props} />
				</Tooltip>

				<div className="line-clamp-2 text-sm leading-4 hover:text-purple-500">
					{props.title}
				</div>
			</div>
		</TooltipProvider>
	);
};
