export interface SeasonsNow {
	pagination: SeasonsNowPagination;
	data: SeasonsNowEntity[];
}

export interface SeasonsNowPagination {
	last_visible_page: number;
	has_next_page: boolean;
	current_page: number;
	items: SeasonsNowItems;
}

export interface SeasonsNowItems {
	count: number;
	total: number;
	per_page: number;
}

export interface SeasonsNowEntity {
	mal_id: number;
	url: string;
	images: SeasonsNowImages;
	trailer: SeasonsNowTrailer;
	approved: boolean;
	titles: SeasonsNowTitle[];
	title: string;
	title_english?: string;
	title_japanese: string;
	title_synonyms: string[];
	type: string;
	source: string;
	episodes?: number;
	status: string;
	airing: boolean;
	aired: SeasonsNowAired;
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
	broadcast: SeasonsNowBroadcast;
	producers: SeasonsNowProducer[];
	licensors: SeasonsNowLicensor[];
	studios: SeasonsNowStudio[];
	genres: SeasonsNowGenre[];
	explicit_genres: any[];
	themes: SeasonsNowTheme[];
	demographics: SeasonsNowDemographic[];
}

export interface SeasonsNowImages {
	jpg: SeasonsNowJpg;
	webp: SeasonsNowWebp;
}

export interface SeasonsNowJpg {
	image_url: string;
	small_image_url: string;
	large_image_url: string;
}

export interface SeasonsNowWebp {
	image_url: string;
	small_image_url: string;
	large_image_url: string;
}

export interface SeasonsNowTrailer {
	youtube_id?: string;
	url?: string;
	embed_url?: string;
	images: SeasonsNowImages2;
}

export interface SeasonsNowImages2 {
	image_url?: string;
	small_image_url?: string;
	medium_image_url?: string;
	large_image_url?: string;
	maximum_image_url?: string;
}

export interface SeasonsNowTitle {
	type: string;
	title: string;
}

export interface SeasonsNowAired {
	from: string;
	to: any;
	prop: SeasonsNowProp;
	string: string;
}

export interface SeasonsNowProp {
	from: SeasonsNowFrom;
	to: SeasonsNowTo;
}

export interface SeasonsNowFrom {
	day: number;
	month: number;
	year: number;
}

export interface SeasonsNowTo {
	day: any;
	month: any;
	year: any;
}

export interface SeasonsNowBroadcast {
	day?: string;
	time?: string;
	timezone?: string;
	string?: string;
}

export interface SeasonsNowProducer {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

export interface SeasonsNowLicensor {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

export interface SeasonsNowStudio {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

export interface SeasonsNowGenre {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

export interface SeasonsNowTheme {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}

export interface SeasonsNowDemographic {
	mal_id: number;
	type: string;
	name: string;
	url: string;
}
