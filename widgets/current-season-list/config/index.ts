export const CONTROLS = [
	{
		title: "Ongoing",
		url: "/seasons/now",
		id: 1,
		currentPage: 1,
	},
	{
		title: "Upcoming",
		url: "/seasons/upcoming",
		id: 2,
		currentPage: 1,
	},
];

export const STALE_TIME = Infinity;
export const LIMIT = "12";
export const TITLE = "Recently Updated";

export * as CurrentSeasonConfig from "./";
