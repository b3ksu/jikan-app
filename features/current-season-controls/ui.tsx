import { AnimeListPagination } from "@/shared/types";
import { Button } from "@/shared/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { CurrentSeasonConfig } from "@/widgets/current-season-list/config";
import { ICurrentSeasonControlsNav } from "@/widgets/current-season-list/model/current-season.interface";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
	curr: ICurrentSeasonControlsNav;
	handleChange: (nav: ICurrentSeasonControlsNav) => void;
	handleNext: () => void;
	handlePrev: () => void;
	pagination: AnimeListPagination | undefined;
	isLoading: boolean;
}

export const CurrentSeasonControls = ({
	curr,
	handleChange,
	handleNext,
	handlePrev,
	pagination,
	isLoading,
}: Props) => {
	return (
		<Tabs defaultValue={CurrentSeasonConfig.CONTROLS[0].title} className="">
			<div className="mb-3 flex items-center gap-2">
				<TabsList>
					{CurrentSeasonConfig.CONTROLS.map((el) => (
						<TabsTrigger
							disabled={isLoading}
							value={el.title}
							key={el.id}
							onClick={() => handleChange(el)}
						>
							{el.title}
						</TabsTrigger>
					))}
				</TabsList>
				<Button
					onClick={handlePrev}
					size="icon"
					disabled={isLoading || pagination?.current_page === 1 ? true : false}
				>
					<ChevronLeft size={28} />
				</Button>
				<Button
					size="icon"
					onClick={handleNext}
					disabled={isLoading || !pagination?.has_next_page ? true : false}
				>
					<ChevronRight size={28} />
				</Button>
			</div>
		</Tabs>
	);
};
