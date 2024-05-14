import { AnimeListPagination } from "@/shared/types";
import { Button } from "@/shared/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CURRENT_SEASON_NAV, useSetCurrentNav } from "../../model/set-current-nav";

interface Props extends ReturnType<typeof useSetCurrentNav> {
	pagination: AnimeListPagination | undefined;
}

export const SeasonLinks = ({ curr, handleChange, handleNext, handlePrev, pagination }: Props) => {
	return (
		<div className="mb-3 flex items-center gap-2">
			{CURRENT_SEASON_NAV.map((el) => (
				<Button
					key={el.id}
					variant={curr.title === el.title ? "purple" : "default"}
					onClick={() => handleChange(el)}
				>
					{el.title}
				</Button>
			))}
			<Button
				onClick={handlePrev}
				size="icon"
				disabled={pagination?.current_page === 1 ? true : false}
			>
				<ChevronLeft size={28} />
			</Button>
			<Button
				size="icon"
				onClick={handleNext}
				disabled={pagination?.has_next_page ? false : true}
			>
				<ChevronRight size={28} />
			</Button>
		</div>
	);
};
