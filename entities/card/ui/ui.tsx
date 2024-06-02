import { AnimeListEntity } from "@/shared/types";
import { LargeCard } from "./large-card";
import { SmallCard } from "./small-card";

type Props = AnimeListEntity & {
	isLoading: boolean;
	cardType: "large-card" | "small-card";
	index?: number;
	shouldCount?: boolean;
	isFullCardInfo?: boolean;
};

export const Card = ({ cardType, shouldCount = false, isFullCardInfo = false, ...rest }: Props) => {
	switch (cardType) {
		case "large-card":
			return <LargeCard {...rest} />;
		case "small-card":
			return <SmallCard shouldCount={shouldCount} isFull={isFullCardInfo} {...rest} />;
		default:
			return null;
	}
};
