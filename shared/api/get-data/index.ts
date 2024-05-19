import axios from "axios";

export const getData = async <T>(endpoint: string): Promise<T> => {
	try {
		const res = await axios.get<T>(`${process.env.NEXT_PUBLIC_BASE_API}${endpoint}`);
		return res.data;
	} catch (err) {
		throw new Error("что то неладно");
	}
};
