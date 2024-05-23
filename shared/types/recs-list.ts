export interface RecsRoot {
	pagination: RecsPagination;
	data: RecsDaum[];
}

export interface RecsPagination {
	last_visible_page: number;
	has_next_page: boolean;
}

export interface RecsDaum {
	mal_id: string;
	entry: RecsEntry[];
	content: string;
	date: string;
	user: RecsUser;
}

export interface RecsEntry {
	mal_id: number;
	url: string;
	images: RecsImages;
	title: string;
}

export interface RecsImages {
	jpg: RecsJpg;
	webp: RecsWebp;
}

export interface RecsJpg {
	image_url: string;
	small_image_url: string;
	large_image_url: string;
}

export interface RecsWebp {
	image_url: string;
	small_image_url: string;
	large_image_url: string;
}

export interface RecsUser {
	url: string;
	username: string;
}
