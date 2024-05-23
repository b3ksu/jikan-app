export type IRecsParams = {
	filter?: string;
	limit?: string;
	rating?: "g" | "pg" | "pg13" | "r17" | "r" | "rx";
	sfw?: "true" | "false";
	page?: string;
	type?: "tv" | "movie" | "ova" | "special" | "ona" | "music" | "cm" | "pv" | "tv_special";
};
