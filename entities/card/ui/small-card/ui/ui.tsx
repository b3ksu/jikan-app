import { cn } from "@/shared/lib/cn";
import { AnimeListEntity } from "@/shared/types";
import { Badge } from "@/shared/ui/badge";
import { SmallCardContent } from "./small-card-content/ui";

type Props = AnimeListEntity & {
	isLoading: boolean;
	index?: number;
	shouldCount?: boolean;
	isFull?: boolean;
};

export const SmallCard = ({ index, isLoading, shouldCount, isFull, ...props }: Props) => {
	const outlineClassName = {
		"outline-purple-600": index === 1 && shouldCount,
		"outline-orange-600": index === 2 && shouldCount,
		"outline-yellow-600": index === 3 && shouldCount,
		"justify-start": shouldCount,
	};

	const countClassName = {
		"text-purple-600": index === 1 && shouldCount,
		"text-orange-600": index === 2 && shouldCount,
		"text-yellow-600": index === 3 && shouldCount,
	};

	return (
		<div
			className={cn(
				"flex w-full cursor-pointer items-center justify-between gap-2 rounded bg-gray-800 p-1 px-2 outline outline-1 outline-transparent hover:bg-gray-700/50",
				outlineClassName,
			)}
		>
			{shouldCount && (
				<div className={cn("text-4xl font-bold text-gray-500", countClassName)}>
					{index}
				</div>
			)}

			<SmallCardContent {...props} />

			{isFull && (
				<div className="flex gap-2">
					{props.genres.map((el) => (
						<Badge key={el.mal_id} className="bg-gray-500">
							{el.name}
						</Badge>
					))}
				</div>
			)}
		</div>
	);
};
