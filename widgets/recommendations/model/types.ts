export interface Recommendations {
	pagination: RecommedationsPagination;
	data: RecommendationsList[];
}

export interface RecommedationsPagination {
	last_visible_page: number;
	has_next_page: boolean;
}

export interface RecommendationsList {
	mal_id: string;
	entry: RecommendationsEntry[];
	content: string;
	date: Date;
	user: RecommendationsUser;
}

export interface RecommendationsEntry {
	mal_id: number;
	url: string;
	images: { jpg: RecommendationsImages };
	title: string;
}

export interface RecommendationsImages {
	image_url: string;
	small_image_url: string;
	large_image_url: string;
}

export interface RecommendationsUser {
	url: string;
	username: string;
}
