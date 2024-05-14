export interface AnimeList {
	pagination: AnimeListPagination;
	data: AnimeListEntity[];
}

export interface AnimeListPagination {
	last_visible_page: number;
	has_next_page: boolean;
	current_page: number;
	items: AnimeListEntities;
}

export interface AnimeListEntities {
	count: number;
	total: number;
	per_page: number;
}

export interface AnimeListEntity {
	mal_id: number;
	url: string;
	images: AnimeListImages;
	trailer: AnimeListTrailer;
	approved: boolean;
	titles: AnimeListTitle[];
	title: string;
	title_english?: string;
	title_japanese: string;
	title_synonyms: string[];
	type: string;
	source: string;
	episodes?: number;
	status: string;
	airing: boolean;
	aired: AnimeListAired;
	duration: string;
	rating: string;
	score?: number;
	scored_by?: number;
	rank?: number;
	popularity: number;
	members: number;
	favorites: number;
	synopsis: string;
	background?: string;
	season?: string;
	year?: number;
	broadcast: AnimeListBroadcast;
	producers: AnimeListProducer[];
	licensors: AnimeListLicensor[];
	studios: AnimeListStudio[];
	genres: AnimeListGenre[];
	explicit_genres: any[];
	themes: AnimeListTheme[];
	demographics: AnimeListDemographic[];
}

export interface AnimeListImages {
	jpg: AnimeListJpg;
	webp: AnimeListWebp;
}

export interface AnimeListJpg {
	image_url: string;
	small_image_url: string;
	large_image_url: string;
}

export interface AnimeListWebp {
	image_url: string;
	small_image_url: string;
	large_image_url: string;
}

export interface AnimeListTrailer {
	youtube_id?: string;
	url?: string;
	embed_url?: string;
	images: AnimeListImages2;
}

export interface AnimeListImages2 {
	image_url?: string;
	small_image_url?: string;
	medium_image_url?: string;
	large_image_url?: string;
	maximum_image_url?: string;
}

export interface AnimeListTitle {
	type: string;
	title: string;
}

export interface AnimeListAired {
	from: string;
	to: any;
	prop: AnimeListProp;
	string: string;
}

export interface AnimeListProp {
	from: AnimeListFrom;
	to: AnimeListTo;
}

export interface AnimeListFrom {
	day: number;
	month: number;
	year: number;
}

export interface AnimeListTo {
	day: any;
	month: any;
	year: any;
}

export interface AnimeListBroadcast {
	day?: string;
	time?: string;
	timezone?: string;
	string?: string;
}

export interface AnimeListProducer {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

export interface AnimeListLicensor {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

export interface AnimeListStudio {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

export interface AnimeListGenre {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

export interface AnimeListTheme {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

export interface AnimeListDemographic {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}
