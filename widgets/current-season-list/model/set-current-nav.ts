import { useCallback, useState } from "react";
import { CurrentSeasonNav } from "../ui/ui";

export const CURRENT_SEASON_NAV: CurrentSeasonNav[] = [
	{
		title: "Ongoing",
		url: "/seasons/now?limit=12",
		id: 1,
		currentPage: 1,
	},
	{
		title: "Upcoming",
		url: "/seasons/upcoming?limit=12",
		id: 2,
		currentPage: 1,
	},
];

export const useSetCurrentNav = () => {
	const [curr, setCurr] = useState<CurrentSeasonNav>(CURRENT_SEASON_NAV[0]);

	const handlePrev = useCallback(() => {
		const res: CurrentSeasonNav = {
			...curr,
			currentPage: curr.currentPage - 1,
		};
		setCurr(res);
	}, [curr]);

	const handleNext = useCallback(() => {
		const res: CurrentSeasonNav = {
			...curr,
			currentPage: curr.currentPage + 1,
		};
		setCurr(res);
	}, [curr]);

	const handleChange = useCallback(
		(tab: CurrentSeasonNav) => {
			if (curr.title !== tab.title) {
				setCurr(tab);
			}
		},
		[curr],
	);

	return { curr, handleNext, handlePrev, handleChange };
};
