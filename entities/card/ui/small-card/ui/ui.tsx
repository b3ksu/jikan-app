import { cn } from "@/shared/lib/cn";
import { AnimeListEntity } from "@/shared/types";
import { SmallCardContent } from "./small-card-content/ui";

type Props = AnimeListEntity & {
	isLoading: boolean;
	index: number;
	shouldCount?: boolean;
};

export const SmallCard = ({ index, isLoading, shouldCount, ...props }: Props) => {
	const outlineClassName = {
		"outline-purple-600": index === 1 && shouldCount,
		"outline-orange-600": index === 2 && shouldCount,
		"outline-yellow-600": index === 3 && shouldCount,
	};

	const countClassName = {
		"text-purple-600": index === 1 && shouldCount,
		"text-orange-600": index === 2 && shouldCount,
		"text-yellow-600": index === 3 && shouldCount,
	};

	return (
		<div
			className={cn(
				"flex cursor-pointer items-center gap-2 rounded bg-gray-800 p-1 outline outline-1 outline-transparent",
				outlineClassName,
			)}
		>
			{shouldCount && (
				<div className={cn("text-4xl font-bold text-gray-500", countClassName)}>
					{index}
				</div>
			)}

			<SmallCardContent {...props} />
		</div>
	);
};
