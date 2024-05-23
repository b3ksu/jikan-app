export type ISeasonsPaths = { year: string; season: "winter" | "spring" | "summer" | "fall" };

export interface SeasonsRoot {
	pagination: SeasonsPagination;
	data: SeasonsData[];
}

export interface SeasonsPagination {
	last_visible_page: number;
	has_next_page: boolean;
}

export interface SeasonsData {
	year: number;
	seasons: ["winter", "spring", "summer", "fall"];
}
