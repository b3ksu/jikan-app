import { ZodError } from "zod";
import { Root } from "../model/types";

export const fetchRecommendations = async (): Promise<Root | undefined> => {
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/seasons/now?page=1`);
		return await response.json();
	} catch (err) {
		if (err instanceof ZodError) {
			throw err;
		} else {
			throw new Error("что то неладно");
		}
	}
};
