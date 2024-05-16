import { CURRENT_SEASON_NAV } from "@/shared/constant";
import { AnimeListPagination } from "@/shared/types";
import { Button } from "@/shared/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CurrentSeasonNav } from "../../model/types";

interface Props {
	curr: CurrentSeasonNav;
	handleChange: (nav: CurrentSeasonNav) => void;
	handleNext: () => void;
	handlePrev: () => void;
	pagination: AnimeListPagination | undefined;
}

export const SeasonLinks = ({ curr, handleChange, handleNext, handlePrev, pagination }: Props) => {
	return (
		<Tabs defaultValue={CURRENT_SEASON_NAV[0].title} className="">
			<div className="mb-3 flex items-center gap-2">
				<TabsList>
					{CURRENT_SEASON_NAV.map((el) => (
						<TabsTrigger value={el.title} key={el.id} onClick={() => handleChange(el)}>
							{el.title}
						</TabsTrigger>
					))}
				</TabsList>
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
		</Tabs>
	);
};
