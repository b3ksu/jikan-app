export const LIMIT = "9";
export const FILTER = "favorite";
export const TITLE = "Top anime";
export const STALE_TIME = 10_000;

export type TopAnimeControls = {
	title: string;
	id: number;
	params: "favorite" | "bypopularity";
};

export const CONTROLS: TopAnimeControls[] = [
	{
		title: "Favorite",
		id: 1,
		params: "favorite",
	},
	{
		title: "Most popular",
		id: 2,
		params: "bypopularity",
	},
];

export * as TopAnimeConfig from "./index";
